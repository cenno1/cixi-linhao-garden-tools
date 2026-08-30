import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "OEM & Custom Brass Fittings Manufacturing Capabilities",
  description:
    "Review OEM and custom brass fitting capabilities for GHT, BSP, NPT and metric threads, dimensions, materials, finishes, tooling, inspection and packaging.",
  alternates: { canonical: "/capabilities" },
};

const capabilityAreas = [
  ["Custom dimensions", "Dimensions are reviewed against the drawing, sample and mating components."],
  ["Thread systems", "GHT / NH, BSP / BSPP / BSPT, NPT, metric and custom thread requirements are reviewed before quotation."],
  ["Brass options", "Material grades and market requirements are reviewed for each project."],
  ["Surface finishes", "Natural brass and nickel-plated finish requirements can be specified."],
  ["Custom tooling", "Tooling requirements are reviewed for non-standard part geometry."],
  ["OEM packing", "Packaging and export-packing requirements are confirmed with the order specification."],
];

const threadOptions = [
  ["GHT / NH", "Garden hose thread requirements; confirm nominal size, mating component and gauge requirement."],
  ["BSP / BSPP / BSPT", "Confirm parallel or tapered form, nominal size, pitch, tolerance and sealing method."],
  ["NPT", "Confirm nominal size, taper requirement, pitch and the mating threaded component."],
  ["Metric Threads", "Specify major diameter, pitch, tolerance class, engagement length and mating component."],
  ["Custom Threads", "Provide the drawing, thread profile, pitch, tolerances and inspection or gauge requirement."],
];

const inspectionPoints = [
  "Critical dimensions",
  "Thread form and fit",
  "Sealing-related requirements",
  "Surface appearance",
  "Packaging details",
  "Approved specification alignment",
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linhaogarden.com";
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Manufacturing Capabilities", item: `${siteUrl}/capabilities` },
  ],
};

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="capabilities-hero">
          <div className="container capabilities-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">Custom brass component development</span>
              <h1>OEM & Custom Brass Fittings Manufacturing Capabilities</h1>
              <p>Can your part be made? Send a drawing, sample or specification so dimensions, threads, material, sealing requirements, finish and packaging can be reviewed before quotation.</p>
              <a className="button button-gold" href="/contact?product=Custom%20Brass%20Fitting%20Drawing">Send Drawing for Review</a>
            </div>
            <div className="capabilities-hero-image">
              <Image src="/images/products/hose-reel-brass-swivel-360-rotation.png" alt="Brass swivel fitting showing machined threads and rotating connection" width={900} height={700} sizes="(max-width: 820px) 100vw, 48vw" priority />
            </div>
          </div>
        </section>

        <section className="section capability-overview">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="eyebrow">Project review scope</span>
              <h2>What can be specified</h2>
            </div>
            <div className="capability-overview-grid">
              {capabilityAreas.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section capability-manufacturing" id="manufacturing">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">Manufacturing</span>
                <h2>Real production equipment for precision components.</h2>
              </div>
              <p>These production-floor images document CNC turning, machining and automated machine loading. Part-specific process scope is confirmed against the approved drawing, sample and technical file.</p>
            </div>
            <div className="manufacturing-photo-grid">
              <article>
                <div className="manufacturing-photo manufacturing-photo-floor">
                  <Image src="/images/factory/cnc-production-floor.png" alt="CNC turning machines arranged on the production floor" width={1320} height={438} sizes="(max-width: 820px) 100vw, 34vw" />
                </div>
                <div className="manufacturing-card-copy">
                  <span>01</span>
                  <h3>CNC Turning</h3>
                  <p>CNC turning centers support production to the approved dimensions, thread interfaces and part specification.</p>
                </div>
              </article>
              <article>
                <div className="manufacturing-photo manufacturing-photo-robot">
                  <Image src="/images/factory/automated-cnc-machining.png" alt="Robotic loading system operating beside a CNC machine" width={1322} height={308} sizes="(max-width: 820px) 100vw, 34vw" />
                </div>
                <div className="manufacturing-card-copy">
                  <span>02</span>
                  <h3>Automated Machine Loading</h3>
                  <p>Robotic loading supports repeatable work handling on selected CNC production operations.</p>
                </div>
              </article>
              <article>
                <div className="manufacturing-photo manufacturing-photo-line">
                  <Image src="/images/factory/automated-cnc-machining.png" alt="Automated machining line with components at the machine output" width={1322} height={308} sizes="(max-width: 820px) 100vw, 34vw" />
                </div>
                <div className="manufacturing-card-copy">
                  <span>03</span>
                  <h3>Machining</h3>
                  <p>Machining cells support approved component geometries and batch requirements after engineering review.</p>
                </div>
              </article>
            </div>
            <p className="manufacturing-evidence-note">Photographs supplied as production evidence. Additional processes are added only after capability confirmation and supporting documentation.</p>
          </div>
        </section>

        <section className="section capability-materials" id="materials">
          <div className="container capability-split">
            <div>
              <span className="eyebrow">Brass materials</span>
              <h2>Confirm the grade and compliance requirement first.</h2>
              <p>Material selection must follow the approved specification and target-market requirements. A generic material name is not treated as a substitute for a confirmed grade.</p>
            </div>
            <div className="material-option-list">
              <article><span>01</span><h3>Standard brass</h3><p>Specify the required grade or performance requirement for confirmation before quotation.</p></article>
              <article><span>02</span><h3>Lead-free brass</h3><p>Provide the required material grade and applicable market or compliance standard for feasibility confirmation.</p></article>
              <article><span>03</span><h3>Customer-specified material</h3><p>Send the grade designation, drawing notes and any material-certificate requirements for review.</p></article>
            </div>
          </div>
        </section>

        <section className="section capability-threads" id="threads">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Thread options</span><h2>Specify the complete thread interface.</h2></div>
              <p>A family name alone is not enough for production. The approved file should define thread form, size, pitch, tolerance, sealing method, mating part and any gauge requirement.</p>
            </div>
            <div className="thread-option-grid">
              {threadOptions.map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section capability-technical">
          <div className="container capability-technical-grid">
            <div className="capability-photo">
              <Image src="/images/products/catalogue/lh-3638.jpg" alt="Machined brass elbow fitting with threaded connections" width={760} height={760} sizes="(max-width: 820px) 100vw, 42vw" />
            </div>
            <div>
              <span className="eyebrow">Dimensions, threads and finishes</span>
              <h2>Review the interfaces that determine fit.</h2>
              <ul className="check-list">
                <li>Custom dimensions from drawing or approved sample</li>
                <li>GHT, BSP and NPT thread requirements</li>
                <li>Male, female, reducing and mating-thread combinations</li>
                <li>Natural brass and nickel-plated finish requirements</li>
                <li>Custom tooling review for non-standard geometry</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section capability-inspection">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow eyebrow-light">Inspection scope</span><h2>Check the approved specification, not assumptions.</h2></div>
              <p>Inspection points are selected for the specific part, application and approved buyer file.</p>
            </div>
            <div className="capability-inspection-grid">
              {inspectionPoints.map((point, index) => <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><strong>{point}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="capability-cta">
          <div className="container">
            <div><span className="eyebrow eyebrow-light">Start with technical input</span><h2>Send the drawing, sample or specification.</h2><p>Include dimensions, thread requirements, material or grade, quantity, finish, inspection requirements and packaging needs.</p></div>
            <a className="button button-gold" href="/contact?product=Custom%20Brass%20Fitting%20Drawing">Request an Engineering Review</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
