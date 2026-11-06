import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const pages: MetadataRoute.Sitemap = ([
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/training`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ] as const).map((p) => ({ ...p, lastModified: now }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products?product=${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...productPages];
}
