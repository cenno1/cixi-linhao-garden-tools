import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { blogPosts } from "../data/blogs";

export const metadata: Metadata = { title: "Garden Hose Fittings & OEM Buyer Guides", description: "Practical buyer guides for brass hose connectors, watering products, garden tools and private-label sourcing programs.", alternates: { canonical: "/resources" } };

export default function ResourcesPage() {
  const guides = [["01", "Choosing a hose connector range", "Map target-market thread standards, material levels, water-stop needs and set combinations before selecting SKUs."], ["02", "Planning a garden tool kit", "Build around a clear user and task: starter gardening, premium hand tools, pruning, bonsai, kids or gifting."], ["03", "Preparing an OEM inquiry", "Include target market, product references, estimated volume, required packaging, certifications and timing."], ["04", "Reviewing a pre-production sample", "Confirm product function and appearance together with logo placement, labels, barcode and pack-out."]];
  return <>
    <Header />
    <main>
      <section className="page-hero resources-hero"><div className="container"><span className="eyebrow eyebrow-light">Buyer resources</span><h1>Make faster, better-informed sourcing decisions.</h1><p>Practical articles and sourcing guides for garden product buyers.</p></div></section>
      <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Latest articles</span><h2>Questions buyers and gardeners are asking now.</h2></div><div className="resource-grid">{blogPosts.map((post, index) => <article key={post.slug}><span>{String(index + 1).padStart(2, "0")} / {post.topic}</span><h2>{post.title}</h2><p>{post.description}</p><a href={`/resources/${post.slug}`}>Read article →</a></article>)}</div></div></section>
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Sourcing guides</span><h2>Prepare your next inquiry.</h2></div><div className="resource-grid">{guides.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p><a href="/contact">Discuss this with us →</a></article>)}</div></div></section>
      <section className="resource-cta"><div className="container"><h2>Have a target product or competitor reference?</h2><p>Upload it with your inquiry and tell us the market, quantity and changes you need.</p><a className="button button-gold" href="/contact">Send a sourcing brief</a></div></section>
    </main>
    <Footer /><WhatsAppFloat />
  </>;
}
