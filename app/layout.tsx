import type { Metadata } from "next";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Brass & Aluminum Hose Fittings | Cixi Linhao", template: "%s | Cixi Linhao" },
  description: "Cixi Linhao Metal Product Co., Ltd. supplies custom brass and aluminum valves and hose fittings developed from drawings and samples.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/images/cixi-linhao-mark.png", shortcut: "/images/cixi-linhao-mark.png" },
  openGraph: {
    title: "Custom Brass Garden Hose Fittings Manufacturer | CIXI LINHAO",
    description: "Custom brass hose connectors, couplings, adapters and hose reel fittings developed from drawings, samples and approved specifications.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CIXI LINHAO custom brass garden hose fittings" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<GoogleAnalytics /></body></html>;
}
