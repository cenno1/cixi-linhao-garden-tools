export type LandingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  image: string;
  productSlugs: string[];
  benefits: { title: string; text: string }[];
  specificationPoints: string[];
  faqs: { question: string; answer: string }[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "brass-hose-connectors-manufacturer",
    eyebrow: "Brass hose connector supplier",
    title: "Brass hose connectors for garden product buyers.",
    description: "Source brass hose connectors, adapters, elbows and water-stop fittings with practical specification and OEM packaging support from CIXI LINHAO.",
    lead: "Build a durable hose-fitting range around the connection types and packaging formats your market needs. We help buyers compare configurations before a quotation is prepared.",
    image: "/images/products/brass-connectors.webp",
    productSlugs: ["brass-quick-connectors", "brass-connector-set-3601", "brass-water-stop-connector-3604z"],
    benefits: [
      { title: "Range-ready selection", text: "Quick connectors, male and female adapters, elbows, repair parts and closing caps can be combined into one practical buying program." },
      { title: "Connection review", text: "Share the hose size, thread standard and end-use equipment so the right fitting configuration can be reviewed before sampling or quotation." },
      { title: "OEM packing support", text: "Discuss individual packs, sets, labels, barcodes and presentation requirements for your retail or distributor program." },
    ],
    specificationPoints: ["Target market and connection standard", "Required size, thread and water-stop function", "Material or finish preference", "Individual, set or retail-ready packaging", "Expected quantity and delivery timing"],
    faqs: [
      { question: "Which brass hose connector types can I source?", answer: "The current range includes quick connectors, male and female adapters, water-stop connectors, elbows, double-ended connectors, hose caps and related hose-end components." },
      { question: "Can I request a mixed brass connector program?", answer: "Yes. Send a list of required types, reference photos or a target assortment. We can help organise the enquiry around compatible connection options and packaging." },
      { question: "Do you show prices online?", answer: "No. CIXI LINHAO is a B2B enquiry website. A quotation depends on the selected configuration, packaging and quantity." },
    ],
  },
  {
    slug: "brass-quick-connector-supplier",
    eyebrow: "Garden hose quick connectors",
    title: "Brass quick connectors built for repeat hose changes.",
    description: "B2B sourcing page for brass garden hose quick connectors, water-stop fittings and compatible adapters with OEM packaging support.",
    lead: "For distributors and private-label buyers, a quick-connector range needs clear compatibility, durable materials and a simple selection story. Start with the connections your customers use most.",
    image: "/images/products/brass-connectors.webp",
    productSlugs: ["brass-quick-connectors", "brass-quick-connector-3603", "brass-quick-connector-3604"],
    benefits: [
      { title: "Fast-connect assortment", text: "Combine standard quick connectors with water-stop versions, tap adapters and hose-end fittings for an easy-to-understand range." },
      { title: "Buyer-focused specification", text: "Confirm connection size and intended watering equipment before selecting the product mix for your target market." },
      { title: "Private-label presentation", text: "Coordinate labels, inserts and pack format with the rest of your watering assortment." },
    ],
    specificationPoints: ["Hose size and target connector system", "Standard connector or water-stop requirement", "Compatible nozzle, sprinkler or tap adapter", "Packaging artwork and barcode needs", "Forecast quantity"],
    faqs: [
      { question: "What is a water-stop quick connector?", answer: "A water-stop connector is designed to help stop or reduce water flow when a compatible accessory is disconnected. Confirm the intended connector system before ordering." },
      { question: "Can quick connectors be packed in sets?", answer: "Yes. Let us know the desired combination, for example connector plus adapter, and the required retail or bulk-pack format." },
      { question: "How do I request specifications?", answer: "Use the enquiry form and include product references, target market, connection size and expected quantity. Our team will review the appropriate options." },
    ],
  },
  {
    slug: "hose-splitter-supplier",
    eyebrow: "2-way & 4-way hose splitters",
    title: "Brass hose splitters for multi-zone watering programs.",
    description: "Source two-way and four-way brass hose splitters for garden taps, irrigation zones and greenhouse watering programs with B2B enquiry support.",
    lead: "Hose splitters make it easier to run multiple watering lines from one tap. For an effective product program, confirm the outlet count, flow-control layout and connection standard first.",
    image: "/images/products/hose-splitters.webp",
    productSlugs: ["multi-way-hose-splitters", "brass-four-way-hose-splitters", "brass-two-way-splitter-3672a"],
    benefits: [
      { title: "Choice by use case", text: "Select two-way or four-way configurations based on lawn zones, greenhouse lines, outdoor taps or other watering layouts." },
      { title: "Clear assortment planning", text: "Pair splitters with compatible connectors, shut-off valves and watering accessories to make cross-selling easier." },
      { title: "Practical OEM enquiry", text: "Share your handle, finish, packaging and volume requirements so we can assess the appropriate product configuration." },
    ],
    specificationPoints: ["Required outlet count", "Tap inlet and hose connection standard", "Independent flow-control requirement", "Target user and market", "Packaging, quantity and timing"],
    faqs: [
      { question: "Should I choose a 2-way or 4-way hose splitter?", answer: "Choose the outlet count according to the number of watering lines the user needs to control. Confirm the tap and hose connections as part of the product review." },
      { question: "Can hose splitters be supplied with matching fittings?", answer: "A coordinated product enquiry can include compatible connectors, adapters and shut-off components. Provide the required combination or a reference image." },
      { question: "Are these products available for OEM packaging?", answer: "Yes. Ask about packaging format, label requirements and expected quantity when you submit your enquiry." },
    ],
  },
  {
    slug: "oem-garden-tools-supplier",
    eyebrow: "OEM garden tools supplier",
    title: "Garden tools and watering products for private-label programs.",
    description: "CIXI LINHAO supports B2B buyers sourcing garden tools, watering products and brass fittings with practical OEM and private-label packaging coordination.",
    lead: "Bring together garden hand tools, watering accessories and brass fittings in a coherent program for your retail, distribution or promotional channel. Start with the user, market and product mix.",
    image: "/images/products/garden-tool-kits.webp",
    productSlugs: ["garden-tool-kits", "stainless-garden-hand-tools", "brass-quick-connectors"],
    benefits: [
      { title: "Coordinated product categories", text: "Build a range that combines hand tools, tool kits, sprinklers, nozzles, splitters and brass hose components." },
      { title: "Clear brief, faster response", text: "A useful enquiry includes the target market, reference products, expected quantity, packaging direction and delivery window." },
      { title: "Private-label support", text: "Discuss logo placement, color direction, labels, barcodes and package format before sampling or final quotation." },
    ],
    specificationPoints: ["Target country and sales channel", "Product categories and reference items", "Brand, color and packaging requirements", "Expected volume and launch timing", "Relevant testing or documentation needs"],
    faqs: [
      { question: "Can I combine garden tools and watering products in one enquiry?", answer: "Yes. A mixed-category brief helps us understand the full assortment and identify which product specifications or packaging requirements should be reviewed together." },
      { question: "What should I provide for an OEM garden tools enquiry?", answer: "Include product references, target market, expected quantity, packaging preference, brand information and desired delivery timing." },
      { question: "Can I request samples before placing an order?", answer: "Tell us which products you need to evaluate and the intended market. We can discuss suitable sample and specification-review steps." },
    ],
  },
];
