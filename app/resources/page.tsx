import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { blogPosts } from "../data/blogs";

export const metadata: Metadata = { title: "Valve & Hose Fitting Buyer Guides", description: "Practical buyer guides for hose connectors, splitters, valves, material options and specification-led sourcing.", alternates: { canonical: "/resources" } };

export default function ResourcesPage() {
  const guides = [["01", "Choosing a hose connector range", "Map target-market thread standards, material levels, water-stop needs and set combinations before selecting SKUs."], ["02", "Specifying a valve or splitter", "Define inlet, every outlet, flow-control layout, mating parts and material before requesting a sample."], ["03", "Preparing a custom fitting inquiry", "Include the drawing, target market, material, quantity, packaging and inspection needs."], ["04", "Reviewing a pre-production sample", "Confirm dimensions, thread form, seal, function, appearance and pack-out against an approved specification."]];
  return <>
    <Header />
    <main>
      <section className="page-hero resources-hero"><div className="container"><span className="eyebrow eyebrow-light">Buyer resources</span><h1>Make faster, better-informed sourcing decisions.</h1><p>Practical articles on valves, hose fittings and connection compatibility.</p></div></section>
      <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Latest articles</span><h2>Hose connection and splitter questions.</h2></div><div className="resource-grid">{blogPosts.filter((post) => post.slug !== "how-to-specify-a-durable-hose-nozzle-range").map((post, index) => <article key={post.slug}><span>{String(index + 1).padStart(2, "0")} / {post.topic}</span><h2>{post.title}</h2><p>{post.description}</p><a href={`/resources/${post.slug}`}>Read article →</a></article>)}</div></div></section>
      <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Sourcing guides</span><h2>Prepare your next inquiry.</h2></div><div className="resource-grid">{guides.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p><a href="/contact">Discuss this with us →</a></article>)}</div></div></section>
      <section className="resource-cta"><div className="container"><h2>Have a target product or competitor reference?</h2><p>Upload it with your inquiry and tell us the market, quantity and changes you need.</p><a className="button button-gold" href="/contact">Send a sourcing brief</a></div></section>
    </main>
    <Footer /><WhatsAppFloat />
  </>;
}
