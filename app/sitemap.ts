import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n/config";
import { siteUrl } from "@/data/site";

// /sitemap.xml: по странице на язык; у каждой — ссылки на остальные языковые версии (hreflang).
// lastModified не указываем: new Date() сломал бы статическую сборку (cacheComponents),
// а выдуманная дата вводила бы поисковики в заблуждение.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    "x-default": `${siteUrl}/${defaultLocale}`,
  };
  return locales.map((l) => ({
    url: `${siteUrl}/${l}`,
    changeFrequency: "monthly",
    priority: l === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
