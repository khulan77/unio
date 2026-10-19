import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/pricing", "/salon"].map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
