import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = { title: "Custom Brass Garden Hose Fittings & Components", description: "Explore brass quick connectors, threaded adapters, hose couplings, swivel fittings, elbows, splitters, valves, nozzles and custom brass components.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <><Header /><main><section className="page-hero page-hero-products"><div className="container"><span className="eyebrow eyebrow-light">Brass fitting product range</span><h1>Custom brass garden hose fittings and components.</h1><p>Browse brass connectors, adapters, couplings, swivels, elbows, splitters, valves and nozzle components for B2B sourcing and OEM programs.</p></div></section><section className="section" id="applications"><div className="container"><ProductGrid /></div></section><section className="catalog-cta"><div className="container"><div><span className="eyebrow eyebrow-light">Need a non-standard component?</span><h2>Send your drawing, sample or specification.</h2><p>We can review custom brass components, target dimensions, thread requirements and packaging needs for an OEM quotation.</p></div><a className="button button-gold" href="/contact?product=Custom%20Brass%20Component">Send your drawing</a></div></section></main><Footer /><WhatsAppFloat /></>;
}
