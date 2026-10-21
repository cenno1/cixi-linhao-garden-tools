import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Brass Garden Hose Fittings & OEM Connector Range",
  description:
    "Browse brass garden hose fittings for OEM sourcing: quick connectors, threaded adapters, couplings, splitters, valves and reel fittings. Custom drawings welcome.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Brass Garden Hose Fittings & OEM Connector Range",
    description: "Select a garden hose connector reference or request custom brass and aluminum fittings made to your approved specification.",
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
            <h1>Brass Garden Hose Fittings &amp; Connectors</h1>
            <p>Choose quick connectors, hose adapters, couplings, splitters and valves for your watering equipment or OEM range. Cixi Linhao develops custom brass fittings from drawings and samples; aluminum models are also available below. Confirm the exact thread and mating part for each reference.</p>
            <p><a className="button button-gold" href="/capabilities#custom-options">Explore Custom Brass Fitting Options</a></p>
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
