// Адрес сайта для мета-тегов, sitemap.xml и robots.txt.
// На Vercel задан через env NEXT_PUBLIC_SITE_URL (Production); локально — localhost.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
