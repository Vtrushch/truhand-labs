import type { MetadataRoute } from "next";
import { articles } from "./insights/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://truhandlabs.com";

  const staticPages = [
    "",
    "/insights",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...articlePages];
}
