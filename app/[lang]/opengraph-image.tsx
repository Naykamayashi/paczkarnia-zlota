import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { hasLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

// Картинка-превью для соцсетей (og:image), своя для каждого языка.
// Генерируется при сборке из кода — внешние сервисы не нужны.
export const alt = "Pączkarnia Złota";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Собираем картинки заранее при сборке (иначе с cacheComponents они рендерятся на каждый запрос).
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const root = process.cwd();

// Satori (движок next/og) не читает woff2, поэтому берём .woff из @fontsource.
// Каждое подмножество — отдельный файл: latin, latin-ext (ą, ę, ł…), cyrillic (українська).
// Satori использует только один файл на имя шрифта, поэтому даём каждому своё имя
// и перечисляем их в fontFamily — недостающие буквы берутся из следующего.
const subsets = ["latin", "latin-ext", "cyrillic"];
const display = subsets.map((s) => `Unbounded-${s}`).join(", ");
const body = subsets.map((s) => `Manrope-${s}`).join(", ");

async function loadFonts() {
  const fonts = [
    { name: "Unbounded", pkg: "unbounded", weight: 800 as const },
    { name: "Manrope", pkg: "manrope", weight: 600 as const },
  ];
  return Promise.all(
    fonts.flatMap((f) =>
      subsets.map(async (s) => ({
        name: `${f.name}-${s}`,
        weight: f.weight,
        style: "normal" as const,
        data: await readFile(
          join(root, `node_modules/@fontsource/${f.pkg}/files/${f.pkg}-${s}-${f.weight}-normal.woff`),
        ),
      })),
    ),
  );
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return new Response(await renderPng(lang), { headers: { "Content-Type": contentType } });
}

// 'use cache' — PNG рисуется один раз при сборке, а не на каждый запрос.
async function renderPng(lang: Locale) {
  "use cache";
  const { hero } = getDictionary(lang);

  const [fonts, donuts] = await Promise.all([
    loadFonts(),
    readFile(join(root, "public/images/hero-paczki.svg"), "base64"),
  ]);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fff6e9",
          fontFamily: body,
          color: "#3b2218",
          position: "relative",
        }}
      >
        {/* мягкие пятна, как в hero на сайте */}
        <div style={{ position: "absolute", right: -120, top: -160, width: 560, height: 560, borderRadius: 9999, background: "#f4a6b8", opacity: 0.45 }} />
        <div style={{ position: "absolute", left: -140, bottom: -220, width: 520, height: 520, borderRadius: 9999, background: "#f3d9b1" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 680, padding: "0 0 0 72px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontFamily: display }}>
            <div style={{ width: 22, height: 22, borderRadius: 9999, background: "#d9506f" }} />
            <span>Pączkarnia</span>
            <span style={{ color: "#c47a2c" }}>Złota</span>
          </div>
          <div style={{ marginTop: 34, fontFamily: display, fontSize: 58, lineHeight: 1.1, letterSpacing: -1 }}>
            {hero.title}
          </div>
          <div style={{ marginTop: 30, display: "flex" }}>
            <div style={{ display: "flex", padding: "12px 26px", borderRadius: 9999, background: "#d9506f", color: "#fff", fontSize: 26 }}>
              {hero.eyebrow}
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- внутри ImageResponse работает только обычный <img> */}
        <img
          src={`data:image/svg+xml;base64,${donuts}`}
          width={600}
          height={342}
          alt=""
          style={{ position: "absolute", right: -30, bottom: 70 }}
        />
      </div>
    ),
    { ...size, fonts },
  );
  return new Uint8Array(await image.arrayBuffer());
}
