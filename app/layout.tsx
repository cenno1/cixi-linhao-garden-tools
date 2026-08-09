import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "CIXI LINHAO | Garden Tools & Watering Solutions", template: "%s | CIXI LINHAO" },
  description: "B2B garden tools, brass hose fittings, watering products and private-label programs for global buyers.",
  keywords: ["garden tools supplier", "brass hose fittings", "watering products manufacturer", "OEM garden tools", "garden tool kits"],
  icons: { icon: "/images/cixi-linhao-mark.png", shortcut: "/images/cixi-linhao-mark.png" },
  openGraph: {
    title: "CIXI LINHAO — Garden Tools & Watering Solutions",
    description: "Reliable products and flexible OEM programs for global garden category buyers.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CIXI LINHAO garden tools and watering solutions" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

