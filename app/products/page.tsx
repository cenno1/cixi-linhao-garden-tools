import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Brass Garden Hose Fittings & Connectors Manufacturer",
  description:
    "Explore brass garden hose connectors, quick connectors, couplings, threaded adapters, elbows, splitters, valves, nozzles and hose reel fittings for OEM sourcing.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Brass Garden Hose Fittings & Connectors Manufacturer",
    description: "Browse brass hose fitting categories and model-level product references for B2B and OEM sourcing.",
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
            <span className="eyebrow eyebrow-light">Brass garden hose fitting range</span>
            <h1>Brass Garden Hose Fittings & Connectors</h1>
            <p>Choose the relevant product category before comparing model-level references, thread requirements, dimensions, finishes and OEM packaging.</p>
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
              <span className="eyebrow eyebrow-light">OEM & custom brass fittings</span>
              <h2>Need a non-standard brass component?</h2>
              <p>Send a drawing, sample or specification for review of dimensions, thread requirements, material, finish, seal and packaging.</p>
            </div>
            <a className="button button-gold" href="/contact?product=Custom%20Brass%20Fitting">Send your drawing</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
