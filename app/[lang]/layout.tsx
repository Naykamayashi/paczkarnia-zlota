import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, Unbounded } from "next/font/google";
import { defaultLocale, hasLocale, locales, ogLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { siteUrl } from "@/data/site";
import "../globals.css";

const display = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "700", "800"],
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": `/${defaultLocale}` },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: ogLocales[lang],
      type: "website",
    },
    // картинки og:image и twitter:image Next берёт из opengraph-image.tsx / twitter-image.tsx
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    // data-scroll-behavior: даёт Next выключать плавный скролл на время перехода между страницами
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="min-h-dvh bg-cream font-body text-chocolate">{children}</body>
    </html>
  );
}
