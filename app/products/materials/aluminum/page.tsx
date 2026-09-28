import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { WhatsAppFloat } from "../../../components/WhatsAppFloat";
import { products } from "../../../data/products";

export const metadata: Metadata = {
  title: "Aluminum Hose Fittings, Adapters & Valves",
  description: "Browse aluminum hose connectors, repair fittings, splitters, shut-off valves and NH to NPT/NPS adapters. Confirm mating threads and alloy before quotation.",
  alternates: { canonical: "/products/materials/aluminum" },
};

const items = products.filter((product) => product.material === "Aluminum");

export default function AluminumProductsPage() {
  return <>
    <Header />
    <main>
      <section className="page-hero page-hero-products"><div className="container"><span className="eyebrow eyebrow-light">Material collection</span><h1>Aluminum Hose Fittings &amp; Valves</h1><p>Explore {items.length} aluminum reference models. The NH, NPT and NPS descriptions shown on selected adapter models come from the supplied catalogue; for all other models, confirm the thread standard and mating part.</p></div></section>
      <section className="section"><div className="container">
        <div className="catalog-family-heading"><div><span className="eyebrow">Product references</span><h2>Connectors, adapters, repairs and valves</h2></div><a href="/contact#quote-form">Send aluminum part requirements →</a></div>
        <div className="product-grid">{items.map((product) => <article className="product-card" key={product.code}>
          <a className="product-image" href={`/products/${product.slug}`}><Image src={product.image} alt={`${product.code} aluminum ${product.name}`} width={620} height={420} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></a>
          <div className="product-card-body"><div className="catalog-card-meta"><span className="product-code">{product.code}</span><span className="material-badge material-badge--aluminum">Aluminum</span></div><h3><a href={`/products/${product.slug}`}>{product.name}</a></h3><p>{product.threadSpecification || `Nominal size: ${product.nominalSize}. Confirm the thread standard.`}</p><a className="text-link" href={`/products/${product.slug}`}>View reference →</a></div>
        </article>)}</div>
      </div></section>
    </main>
    <Footer /><WhatsAppFloat />
  </>;
}
