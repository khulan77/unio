import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return process.env.NEXT_PUBLIC_SITE_URL
    ? [
        {
          url: process.env.NEXT_PUBLIC_SITE_URL,
          changeFrequency: "monthly",
          priority: 1,
        },
        {
          url: new URL("/pricing", process.env.NEXT_PUBLIC_SITE_URL).href,
          changeFrequency: "monthly",
          priority: 0.8,
        },
      ]
    : [];
}
