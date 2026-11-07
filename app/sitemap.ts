import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Single-page site — one canonical URL. Section anchors are not separate pages,
 * so they are deliberately not listed here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
