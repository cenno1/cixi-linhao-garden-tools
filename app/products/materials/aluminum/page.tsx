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
  openGraph: {
    title: "Aluminum Hose Fittings, Adapters & Valves",
    description: "Compare aluminum NH-to-NPT/NPS adapters by connection size and gender before requesting a drawing-led quote.",
    url: "/products/materials/aluminum",
    images: [{ url: "/images/products/catalog-2026/lh-3902.webp", alt: "LH-3902 aluminum NH to NPT threaded adapter" }],
  },
};

const items = products.filter((product) => product.material === "Aluminum");
const adapters = items.filter((product) => product.connectionEnds);

export default function AluminumProductsPage() {
  return <>
    <Header />
    <main>
      <section className="page-hero page-hero-products"><div className="container"><span className="eyebrow eyebrow-light">Material collection</span><h1>Aluminum Hose Fittings &amp; Valves</h1><p>Explore {items.length} aluminum reference models. The NH, NPT and NPS descriptions shown on selected adapter models come from the supplied catalogue; for all other models, confirm the thread standard and mating part.</p></div></section>
      <section className="section"><div className="container">
        <div className="section-heading"><span className="eyebrow">Connection selection</span><h2>Compare 3/4-inch NH to NPT / NPS adapters</h2><p>These five aluminum models share a catalogue-listed 3/4-inch NH male end. The pipe-side size, gender and thread designation decide which reference to review. Do not treat NPT, NPS or NH as interchangeable based on nominal size alone.</p></div>
        <div className="engineering-spec-table-wrap"><table className="engineering-spec-table"><thead><tr><th scope="col">Model</th><th scope="col">NH-side end</th><th scope="col">Pipe-side end</th><th scope="col">Selection difference</th></tr></thead><tbody>{adapters.map((product) => <tr key={product.code}><th scope="row"><a href={`/products/${product.slug}`}>{product.code}</a></th><td>{product.connectionEnds?.[0].specification}</td><td>{product.connectionEnds?.[1].specification}</td><td>{product.selectionNote}</td></tr>)}</tbody></table></div>
        <p className="engineering-spec-note">Cixi Linhao Metal Product Co., Ltd. reviews custom brass and aluminum requirements from drawings or samples. Alloy, thread pitch, seal, working pressure, MOQ and delivery terms need project confirmation. <a href="/contact#quote-form">Send both mating connections for review →</a></p>
      </div></section>
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
