/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { InquiryForm } from "./components/InquiryForm";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { categories, products } from "./data/products";

export const metadata: Metadata = {
  title: "Custom Brass Garden Hose Fittings Manufacturer | CIXI LINHAO",
  description: "OEM & ODM brass hose connectors, adapters, swivels and valves manufactured to buyer drawings, samples and specifications.",
  alternates: { canonical: "/" },
};

const highlights = [
  ["Flexible", "OEM / ODM programs"],
  ["Responsive", "Quote support in 24h"],
  ["Export-ready", "Packaging & documentation"],
  ["One partner", "Tools + watering range"],
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
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Custom brass fittings · OEM / ODM · B2B</span>
              <h1>Custom Brass Garden Hose Fittings Manufacturer</h1>
              <p>OEM &amp; ODM brass hose connectors, adapters, swivels and valves manufactured to your drawings, samples and specifications.</p>
              <div className="hero-actions">
                <a className="button" href="/contact?product=Custom%20Brass%20Garden%20Hose%20Fittings">Request a Custom Quote</a>
                <a className="button button-ghost" href="/contact?product=Custom%20Brass%20Fitting%20Drawing">Send Your Drawing</a>
              </div>
              <div className="hero-proof">
                <span><strong>EU / US</strong> connection options</span>
                <span><strong>Private label</strong> packaging support</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="CIXI LINHAO garden product range">
              <div className="hero-green-panel">
                <span>Built for everyday garden work</span>
                <strong>TOOLS + WATERING</strong>
              </div>
              <div className="hero-product hero-product-main">
                <img src="/images/products/garden-tool-kits.webp" alt="Garden tool kit" />
              </div>
              <div className="hero-product hero-product-small">
                <img src="/images/products/brass-connectors.webp" alt="Brass hose connectors" />
              </div>
              <div className="hero-badge"><strong>B2B</strong><span>Export supply</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            {highlights.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section product-system">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">One coordinated product range</span><h2>Four ways to grow your garden category</h2></div>
              <p>Start with a proven item or combine categories into a retailer-ready program with coordinated colors, packaging and positioning.</p>
            </div>
            <div className="category-grid">
              {categories.map((category, index) => (
                <a className={`category-card category-${index + 1}`} href="/products" key={category.name}>
                  <div className="category-image"><img src={category.image} alt={category.name} /></div>
                  <div className="category-copy"><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.description}</p><b>Discover the range →</b></div>
                </a>
              ))}
            </div>
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

        <section className="section oem-section" id="oem">
          <div className="container">
            <div className="section-heading centered-heading"><span className="eyebrow">OEM / ODM workflow</span><h2>From your brief to a shelf-ready program</h2><p>A clear process keeps sourcing decisions moving and reduces avoidable back-and-forth.</p></div>
            <div className="process-grid">
              {[
                ["01", "Share your brief", "Tell us the market, product mix, quantity, target cost and reference requirements."],
                ["02", "Confirm the solution", "We align materials, colors, specifications, packaging and sample expectations."],
                ["03", "Sample & validate", "Review appearance, fit, function and packaging before production approval."],
                ["04", "Produce & deliver", "Quality checkpoints, export packing and shipment coordination complete the program."],
              ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section bestseller-section">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="eyebrow">Buyer starting points</span><h2>Popular product programs</h2></div><a className="text-link" href="/products">View all products <span>→</span></a></div>
            <div className="mini-product-grid">
              {products.slice(0, 4).map((product) => (
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
