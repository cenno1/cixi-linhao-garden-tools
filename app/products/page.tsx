import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Brass & Aluminum Valves and Hose Fittings | LINHAO",
  description:
    "Browse brass and aluminum hose splitters, shut-off valves, pressure regulators, quick connectors, adapters, elbows and hose repair fittings. Send drawings for custom parts.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Brass & Aluminum Valves and Hose Fittings | LINHAO",
    description: "Browse catalogue reference models for valves and hose fittings in brass and aluminum.",
    url: "/products",
    images: [{ url: "/images/products/brass-connectors.webp", alt: "Brass garden hose fittings and connectors" }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero page-hero-products">
          <div className="container">
            <span className="eyebrow eyebrow-light">Cixi Linhao Metal Product Co., Ltd.</span>
            <h1>Brass &amp; Aluminum Valves and Hose Fittings</h1>
            <p>Explore model references by function and material. Share a drawing or sample for custom dimensions, thread interfaces, finishes and packaging. Catalogue nominal size alone does not confirm thread compatibility.</p>
          </div>
        </section>
        <section className="section" id="applications">
          <div className="container">
            <ProductGrid />
          </div>
        </section>
        <section className="catalog-cta">
          <div className="container">
            <div>
              <span className="eyebrow eyebrow-light">Custom brass and aluminum components</span>
              <h2>Need a non-standard fitting or valve?</h2>
              <p>Send a drawing, sample or specification for review of dimensions, connection, material, finish, seal and packaging.</p>
            </div>
            <a className="button button-gold" href="/contact?product=Custom%20Valve%20or%20Hose%20Fitting#quote-form">Send your drawing</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
