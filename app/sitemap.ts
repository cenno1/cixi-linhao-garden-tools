import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blogs";
import { products } from "./data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/resources", "/contact", ...blogPosts.map((post) => `/resources/${post.slug}`), ...products.map((product) => `/products/${product.slug}`)];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/products" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
  }));
}
