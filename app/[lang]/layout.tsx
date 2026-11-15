import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, Unbounded } from "next/font/google";
import { hasLocale, locales, ogLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
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
    // shortcut: адрес-заглушка, при деплое задать NEXT_PUBLIC_SITE_URL
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: ogLocales[lang],
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${display.variable} ${body.variable} antialiased`}>
      <body className="min-h-dvh bg-cream font-body text-chocolate">{children}</body>
    </html>
  );
}
