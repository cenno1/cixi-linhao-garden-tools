import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blogs";
import { landingPages } from "./data/landing-pages";
import { products } from "./data/products";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com").replace(/\/$/, "");

const corePages = [
  { path: "", lastModified: "2026-08-11", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/products", lastModified: "2026-08-11", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", lastModified: "2026-08-11", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/resources", lastModified: "2026-08-11", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", lastModified: "2026-08-11", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...corePages.map((page) => ({ ...page, url: `${siteUrl}${page.path}` })),
    ...landingPages.map((page) => ({
      url: `${siteUrl}/solutions/${page.slug}`,
      lastModified: "2026-08-12",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/resources/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: "2026-08-11",
      changeFrequency: "monthly" as const,
      priority: product.category === "Brass Fittings & Valves" ? 0.8 : 0.7,
    })),
  ];
}

