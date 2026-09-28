import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "About Cixi Linhao Metal Product Co., Ltd.",
  description: "Learn how Cixi Linhao reviews custom brass and aluminum valves and hose fittings from drawings, samples and approved specifications.",
  alternates: { canonical: "/about" },
};

const process = [
  ["Drawing / sample", "Send a CAD file, PDF, image or physical reference part."],
  ["Engineering review", "Clarify the mating threads, dimensions, material and seal."],
  ["Sample", "Review a sample against the agreed specification."],
  ["Production", "Agree production scope after sample and quotation approval."],
  ["Inspection", "Define dimensional, thread, appearance and function checkpoints."],
  ["Packing & shipping", "Confirm marking, packaging and export requirements."],
];

export default function AboutPage() {
  return <><Header /><main>
    <section className="page-hero about-hero"><div className="container"><span className="eyebrow eyebrow-light">About Cixi Linhao Metal Product Co., Ltd.</span><h1>Custom valves and hose fittings, specified around your assembly.</h1><p>We help B2B buyers review brass and aluminum reference models and custom parts from drawings or samples.</p></div></section>
    <section className="section"><div className="container about-intro"><div><span className="eyebrow">Our focus</span><h2>From catalogue reference to approved specification.</h2></div><div><p>Browse hose splitters, shut-off valves, pressure regulators, quick connectors, threaded adapters, elbows and repair fittings. Send the mating parts, thread requirements, target market and quantity for quotation review.</p><p>Custom brass or aluminum geometry, finishes, marking and packaging are reviewed against the project requirements. Material grade, production process and performance criteria are confirmed for each part before quotation.</p><a className="button" href="/products">Explore the product range</a></div></div></section>
    <section className="section oem-detail" id="oem"><div className="container"><div className="section-heading centered-heading"><span className="eyebrow">Custom project workflow</span><h2>Built to your drawing, sample or specification.</h2></div><div className="custom-process-grid">{process.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section quality-section" id="quality"><div className="container feature-story-grid"><div className="quality-copy"><span className="eyebrow">Quality coordination</span><h2>Agree the checks before production.</h2><p>The buyer's approved drawing, sample and packaging file define the acceptance criteria.</p><ul className="check-list"><li>Material and finish identification</li><li>Critical dimensions and thread fit</li><li>Seal and function criteria where applicable</li><li>Marking, label and packaging</li></ul></div><div className="quality-card"><strong>YOUR TECHNICAL FILE</strong><h3>Start with what you have.</h3><p>Drawing or sample</p><p>Mating component</p><p>Required material and quantity</p><p>Target market and packaging</p><a className="button" href="/contact#quote-form">Send Drawing for Review</a></div></div></section>
  </main><Footer /><WhatsAppFloat /></>;
}
