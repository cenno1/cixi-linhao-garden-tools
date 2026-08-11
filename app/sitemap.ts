import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/resources", "/contact"];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/products" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
  }));
}
