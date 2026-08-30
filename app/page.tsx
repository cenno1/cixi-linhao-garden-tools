/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { InquiryForm } from "./components/InquiryForm";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { brassProducts } from "./data/products";

export const metadata: Metadata = {
  title: { absolute: "Custom Brass Garden Hose Fittings Manufacturer | CIXI LINHAO" },
  description: "Custom brass garden hose fittings manufactured from drawings or samples, including GHT, BSP and NPT connectors, adapters, couplings, swivels and OEM packaging.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Brass Garden Hose Fittings Manufacturer | CIXI LINHAO",
    description: "Custom brass hose fittings developed from drawings, samples and approved specifications for global B2B and OEM projects.",
    url: "/",
    images: [{ url: "/images/custom-brass-fittings-cnc-hero.png", alt: "Custom brass garden hose fittings and CNC machining details" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Brass Garden Hose Fittings Manufacturer | CIXI LINHAO",
    description: "Custom brass hose fittings developed from drawings, samples and approved specifications.",
    images: ["/images/custom-brass-fittings-cnc-hero.png"],
  },
};

const highlights = [
  ["Flexible", "OEM / ODM programs"],
  ["Responsive", "Quote support in 24h"],
  ["Export-ready", "Packaging & documentation"],
  ["Focused range", "Brass hose fittings"],
];

const homepageProductCategories = [
  {
    name: "Quick Connectors",
    description: "Fast hose and accessory connection options.",
    image: "/images/products/brass-connectors.webp",
    href: "/products/categories/brass-quick-connectors",
  },
  {
    name: "Threaded Adapters",
    description: "Male, female and reducing thread combinations.",
    image: "/images/products/catalogue/lh-3617.jpg",
    href: "/products/categories/brass-hose-adapters",
  },
  {
    name: "Swivel Fittings",
    description: "Rotating fittings for movement and alignment.",
    image: "/images/products/hose-reel-brass-swivel-360-rotation.png",
    href: "/products/hose-reel-brass-swivel",
  },
  {
    name: "Hose Splitters & Valves",
    description: "Multi-outlet water distribution and flow control.",
    image: "/images/products/hose-splitters.webp",
    href: "/products/categories/brass-hose-splitters",
  },
  {
    name: "Hose Reel Fittings",
    description: "Swivel elbows and inlet fittings for reel assemblies.",
    image: "/images/products/hose-reel-brass-swivel.png",
    href: "/products/categories/hose-reel-brass-fittings",
  },
  {
    name: "Custom Brass Parts",
    description: "Components developed from drawings, samples and specifications.",
    image: "/images/products/catalogue/lh-3601.jpg",
    href: "/capabilities",
  },
];

const customDevelopmentSteps = [
  {
    number: "01",
    title: "Drawing / Sample",
    text: "Send CAD files, PDF drawings, reference images or a physical sample.",
  },
  {
    number: "02",
    title: "Engineering Review",
    text: "Confirm dimensions, thread standards, brass material and sealing structure.",
  },
  {
    number: "03",
    title: "Prototype / Sample",
    text: "Produce and review a prototype or sample before approval.",
  },
  {
    number: "04",
    title: "Mass Production",
    text: "Run the approved specification in batch production.",
  },
  {
    number: "05",
    title: "Inspection",
    text: "Check dimensions, threads, sealing performance and surface appearance.",
  },
  {
    number: "06",
    title: "Packaging & Shipping",
    text: "Complete OEM packaging, export packing and shipment coordination.",
  },
];

const homepageProofPoints = [
  {
    value: String(brassProducts.length),
    title: "Catalogued Brass Product References",
    text: "Current brass catalogue entries available for buyer review.",
  },
  {
    value: "5",
    title: "Thread Routes Reviewed",
    text: "GHT / NH, the BSP family, NPT, metric and custom thread requirements.",
  },
  {
    value: "6",
    title: "Development Stages",
    text: "From drawing or sample review through inspection, packaging and shipment preparation.",
  },
  {
    value: "24h",
    title: "Initial Business Response",
    text: "Target response window for complete business enquiries on working days.",
  },
  {
    value: "CNC",
    title: "Production-Floor Evidence",
    text: "Real CNC turning, machining and automated loading photos are available for review.",
  },
  {
    value: "CAD",
    title: "Drawing / Sample Review",
    text: "CAD files, PDF drawings, reference images and physical samples can start the review.",
  },
  {
    value: "OEM",
    title: "Packaging Options",
    text: "Bulk, retail and buyer-specified packaging is reviewed for each approved order.",
  },
  {
    value: "SPEC",
    title: "Built to Approved Input",
    text: "Dimensions, threads, material, seal, finish and inspection follow approved technical input.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://linhaogarden.com/#organization", name: "CIXI LINHAO", url: "https://linhaogarden.com", logo: "https://linhaogarden.com/images/cixi-linhao-logo.png", email: "info@lh-industrial.com", telephone: "+86-150-8845-2259", address: { "@type": "PostalAddress", addressLocality: "Cixi", addressRegion: "Zhejiang", addressCountry: "CN" }, contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: "+86-150-8845-2259", email: "info@lh-industrial.com", availableLanguage: ["English", "Chinese"] } },
    { "@type": "WebSite", "@id": "https://linhaogarden.com/#website", url: "https://linhaogarden.com", name: "CIXI LINHAO" },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero-custom-projects">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Precision brass manufacturing · OEM / ODM</span>
              <h1>Custom Brass Garden Hose Fittings</h1>
              <p className="hero-project-line">From drawing or sample to production.</p>
              <ul className="hero-capabilities">
                <li>Custom dimensions</li>
                <li>GHT / BSP / NPT threads</li>
                <li>Brass material options</li>
                <li>Natural / nickel plated finishes</li>
                <li>OEM packaging</li>
                <li>Custom tooling</li>
              </ul>
              <div className="hero-actions">
                <a className="button" href="/contact?product=Custom%20Brass%20Fitting%20Drawing">Send Drawing for Quote</a>
              </div>
            </div>
            <div className="hero-manufacturing-visual">
              <img className="hero-manufacturing-image" src="/images/custom-brass-fittings-cnc-hero.png" alt="Precision-machined brass garden hose fittings with CNC and thread details" />
              <div className="hero-manufacturing-note"><span>Precision-machined brass components</span><strong>DRAWING · SAMPLE · PRODUCTION</strong></div>
            </div>
          </div>
        </section>

        <section className="section home-product-categories">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">Brass product categories</span>
              <h2>What we manufacture</h2>
            </div>
            <div className="home-product-category-grid">
              {homepageProductCategories.map((category) => (
                <a className="home-product-category-card" href={category.href} key={category.name}>
                  <div className="home-product-category-image"><img src={category.image} alt={category.name} /></div>
                  <div className="home-product-category-copy"><h3>{category.name}</h3><p>{category.description}</p><span>View category →</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-development-process" id="oem">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow eyebrow-light">Custom manufacturing process</span>
              <h2>Built to Your Drawing, Sample or Specification</h2>
              <p>A mechanical component development workflow from technical input through production inspection and export packing.</p>
            </div>
            <div className="custom-process-grid">
              {customDevelopmentSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-proof-section" id="why-linhao">
          <div className="container">
            <div className="section-heading split-heading home-proof-heading">
              <div>
                <span className="eyebrow eyebrow-light">Why CIXI LINHAO</span>
                <h2>Manufacturing evidence buyers can verify.</h2>
              </div>
              <p>Concrete catalogue scope, documented engineering routes and real production-floor evidence—without unsupported claims.</p>
            </div>
            <div className="home-proof-grid">
              {homepageProofPoints.map((point) => (
                <article className="home-proof-card" key={point.title}>
                  <strong className="home-proof-value">{point.value}</strong>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
            <div className="home-proof-actions">
              <a className="button button-gold" href="/capabilities">Review Manufacturing Capabilities</a>
              <a className="button home-proof-secondary" href="/contact#quote-form">Send Drawing for Review</a>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            {highlights.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="feature-story feature-story-dark">
          <div className="container feature-story-grid">
            <div className="feature-image"><img src="/images/products/brass-connectors.webp" alt="Brass quick-connect hose fittings" /></div>
            <div className="feature-copy">
              <span className="eyebrow eyebrow-light">Metal where reliability matters</span>
              <h2>Brass watering components built for repeat connection.</h2>
              <p>Offer buyers a durable alternative across quick connectors, water-stop fittings, splitters, shut-off valves and spray nozzles.</p>
              <ul className="feature-list"><li>Common EU and US thread configurations</li><li>Natural brass, plated and customized finishes</li><li>Individual, set and retail-ready packaging</li></ul>
              <a className="button button-gold" href="/contact?product=Brass%20Watering%20Components">Discuss your range</a>
            </div>
          </div>
        </section>

        

        <section className="section bestseller-section">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="eyebrow">Buyer starting points</span><h2>Popular product programs</h2></div><a className="text-link" href="/products">View all products <span>→</span></a></div>
            <div className="mini-product-grid">
              {brassProducts.slice(0, 4).map((product) => (
                <article key={product.slug}>
                  <div><img src={product.image} alt={product.name} /></div>
                  <span>{product.code}</span><h3>{product.name}</h3><p>{product.summary}</p>
                  <a href={`/contact?product=${encodeURIComponent(product.name)}`}>Request details →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quality-banner">
          <div className="container quality-grid">
            <div><span className="eyebrow eyebrow-light">Built for buyer confidence</span><h2>Clear specifications. Practical customization. Accountable follow-up.</h2></div>
            <div className="quality-points"><span>Material confirmation</span><span>Fit & function checks</span><span>Packaging validation</span><span>Shipment documentation</span></div>
            <a className="button button-light" href="/about#quality">See our approach</a>
          </div>
        </section>

        <section className="section inquiry-section" id="quote">
          <div className="container inquiry-layout">
            <div className="inquiry-side">
              <span className="eyebrow">Start a conversation</span>
              <h2>A useful quote starts with the right information.</h2>
              <p>Share seven essentials so our team can recommend the right products, assess customization and respond with fewer follow-up questions.</p>
              <ol><li>Your name</li><li>Company</li><li>Email</li><li>WhatsApp / phone</li><li>Product type</li><li>Estimated quantity</li><li>Requirements / reference file</li></ol>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
