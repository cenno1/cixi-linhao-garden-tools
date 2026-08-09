import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = { title: "Products", description: "Explore CIXI LINHAO watering products, brass fittings, garden hand tools and customizable tool kits." };

export default function ProductsPage() {
  return <><Header /><main><section className="page-hero page-hero-products"><div className="container"><span className="eyebrow eyebrow-light">Product range</span><h1>Build the right garden program for your market.</h1><p>Browse core product families, then contact us for specifications, packaging options and an OEM quote.</p></div></section><section className="section"><div className="container"><ProductGrid /></div></section><section className="catalog-cta"><div className="container"><div><span className="eyebrow eyebrow-light">Need a broader selection?</span><h2>Send your target list or reference catalogue.</h2><p>We can review mixed assortments and help organize them into a coherent private-label range.</p></div><a className="button button-gold" href="/contact">Send your requirements</a></div></section></main><Footer /><WhatsAppFloat /></>;
}

