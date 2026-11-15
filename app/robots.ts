import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// /robots.txt: индексировать можно всё, и вот где карта сайта.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
