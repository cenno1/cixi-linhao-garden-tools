import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = { title: "Buyer Resources", description: "Practical sourcing guidance for garden tools, watering fittings and private-label product programs." };

export default function ResourcesPage() {
  const guides = [["01","Choosing a hose connector range","Map target-market thread standards, material levels, water-stop needs and set combinations before selecting SKUs."],["02","Planning a garden tool kit","Build around a clear user and task: starter gardening, premium hand tools, pruning, bonsai, kids or gifting."],["03","Preparing an OEM inquiry","Include target market, product references, estimated volume, required packaging, certifications and timing."],["04","Reviewing a pre-production sample","Confirm product function and appearance together with logo placement, labels, barcode and pack-out."]];
  return <><Header /><main><section className="page-hero resources-hero"><div className="container"><span className="eyebrow eyebrow-light">Buyer resources</span><h1>Make faster, better-informed sourcing decisions.</h1><p>Short guides for organizing requirements before sampling and quotation.</p></div></section><section className="section"><div className="container resource-grid">{guides.map(([n,title,text])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{text}</p><a href="/contact">Discuss this with us →</a></article>)}</div></section><section className="resource-cta"><div className="container"><h2>Have a target product or competitor reference?</h2><p>Upload it with your inquiry and tell us the market, quantity and changes you need.</p><a className="button button-gold" href="/contact">Send a sourcing brief</a></div></section></main><Footer /><WhatsAppFloat /></>;
}

