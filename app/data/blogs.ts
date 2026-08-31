export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  publishedAt: string;
  updatedAt?: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  decisionGroups?: Array<{
    problem: string;
    check: string;
    productSlugs: string[];
    confirm: string[];
  }>;
  commercialLink?: { href: string; label: string; description: string };
  sources?: Array<{ label: string; href: string; note: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "garden-hose-splitter-leaking-diagnostic-guide",
    title: "Garden Hose Splitter Leaking? Diagnose the Inlet, Body, Valve or Outlet",
    description: "A location-by-location troubleshooting and procurement guide for leaking garden hose splitters, covering washers, thread compatibility, body joints, valves and winter care.",
    topic: "Hose splitter troubleshooting",
    publishedAt: "2026-08-31",
    decisionGroups: [
      {
        problem: "Leak at the tap-side inlet",
        check: "Separate seal contact from thread compatibility before adding tape or applying more torque. A washer-sealed hose connection needs the mating faces and washer geometry to match; the same nominal size does not prove that two different thread systems are compatible.",
        productSlugs: ["brass-two-way-splitter-3672a", "multi-way-hose-splitters"],
        confirm: ["Tap and splitter thread systems", "Nominal size plus measured mating dimensions", "Washer location, condition and compression", "Hand-start engagement without cross-threading"],
      },
      {
        problem: "Leak at the manifold body or branch joint",
        check: "A body seam, pinhole or branch-joint leak is a different failure mode from an inlet-washer leak. Stop the water, isolate the exact point and replace a cracked sample rather than trying to cure the body with more inlet torque.",
        productSlugs: ["brass-two-way-splitter-3672a", "brass-four-way-hose-splitters"],
        confirm: ["Approved body and joint construction", "Test pressure and duration from the buyer specification", "All outlets open and closed during sample checks", "Visual inspection criteria after testing"],
      },
      {
        problem: "Leak at an outlet or valve stem",
        check: "Check whether water appears at the outlet washer interface, around the valve stem or from the downstream hose coupling. These locations require different corrective actions and should be recorded separately during sample approval.",
        productSlugs: ["multi-way-hose-splitters", "brass-shut-off-valves"],
        confirm: ["Outlet thread and mating hose end", "Valve handle and operating direction", "Seal material required by the approved application", "Valve cycling and leak-check method"],
      },
    ],
    commercialLink: {
      href: "/products/categories/brass-hose-splitters",
      label: "Review Brass Hose Splitter Options",
      description: "Compare two-way and multi-way catalogue references, then send the mating parts, thread requirement and leak-test specification for engineering review.",
    },
    sources: [
      {
        label: "Reddit: Hose splitter discussion (July 2026)",
        href: "https://www.reddit.com/r/gardening/comments/1uy6c0m/hose_splitter/",
        note: "Recent user discussion used only to identify recurring questions about seams, washers, pressure and seasonal damage.",
      },
      {
        label: "Reddit: Y hose connector leaking (August 2026)",
        href: "https://www.reddit.com/r/Plumbing/comments/1vg5i3g/y_hose_connector_leaking/",
        note: "Recent user discussion used only as a problem signal for separating body leaks from connection leaks.",
      },
      {
        label: "ASME B1.20.7 — Hose Coupling Screw Threads",
        href: "https://www.asme.org/codes-standards/find-codes-standards/b1-20-7-hose-coupling-screw-threads",
        note: "Official standards page confirming that hose-coupling screw threads are a defined thread application.",
      },
      {
        label: "Dixon: Hose Coupling technical guide",
        href: "https://europe.dixonvalve.com/sites/default/files/documents/Hose-Coupling.pdf",
        note: "Technical reference distinguishing washer-sealed hose fittings from thread-sealed connections.",
      },
      {
        label: "Iowa State University Extension: Using Drip Irrigation in the Garden",
        href: "https://yardandgarden.extension.iastate.edu/how-to/using-drip-irrigation-garden",
        note: "Extension guidance for disconnecting, draining and storing irrigation components before winter.",
      },
    ],
    sections: [
      {
        heading: "Start with the exact leak location",
        paragraphs: [
          "Recent Reddit discussions about leaking splitters and Y-connectors show the same troubleshooting mistake repeatedly: every leak is treated as if it came from the tap washer. A splitter can leak at the inlet, a body seam, a branch joint, a valve stem, an outlet or the hose coupling beyond the splitter. Each location points to a different inspection path.",
          "Turn off the water, dry the assembly and reopen the supply slowly while watching one connection at a time. Do not begin by overtightening every joint. Record where the first drop appears and whether it only appears with a valve open, with a valve closed or when the downstream hose is moved.",
        ],
        bullets: [
          "Tap-side inlet: inspect the washer contact, thread engagement and mating tap.",
          "Body seam or branch: look for a pinhole, crack, deformation or joint leak.",
          "Valve stem or handle: observe the stem area while cycling the valve.",
          "Outlet: inspect its washer interface and thread engagement separately.",
          "Downstream hose end: confirm the leak is not travelling back from the hose coupling.",
        ],
      },
      {
        heading: "Separate thread fit from seal contact",
        paragraphs: [
          "Hose coupling threads are standardized applications, but a familiar nominal size alone does not prove compatibility. Confirm the thread system on both mating parts—such as GHT or NH, BSP, NPT, metric or a custom form—together with the sealing method and measured interface.",
          "In a washer-sealed hose connection, the threads mainly draw the faces together while the washer creates the seal. A missing, damaged, displaced or incorrectly sized washer can leak even when the threads appear to fit. A thread-sealed connection works differently. PTFE tape cannot correct incompatible geometry, inadequate washer contact or cross-threading.",
        ],
      },
      {
        heading: "Treat body and valve leaks as separate failure modes",
        paragraphs: [
          "If water comes from the splitter body, a branch joint or a valve stem, replacing the tap washer will not address the observed leak. Remove pressure before inspection. A cracked, visibly deformed or leaking body sample should be taken out of service and reviewed against the approved construction and test requirement.",
          "For B2B sample approval, define the operating and leak-check conditions before testing. Record each inlet, outlet, body joint and valve position separately. LINHAO does not publish a universal pressure rating for every splitter; the required pressure, duration, medium and acceptance criterion should be confirmed for the specific project.",
        ],
      },
      {
        heading: "Reduce winter damage and installation strain",
        paragraphs: [
          "University extension guidance recommends disconnecting and draining irrigation equipment before winter so trapped water is not left to freeze. Follow the supplied product care instructions and store removable components indoors where appropriate.",
          "Also check mechanical strain. A heavy hose hanging from one outlet can load the splitter and tap connection. Support the hose, avoid sharp bends and do not use the splitter as a structural hanger. Seasonal care and installation geometry should be part of the product instructions, not left to guesswork.",
        ],
      },
      {
        heading: "Use a procurement checklist that can be tested",
        paragraphs: [
          "A useful splitter request is more specific than two-way or four-way. Send the actual tap and hose interfaces, target market and the conditions that the approved sample must meet. Unknown engineering facts should stay open for confirmation rather than being copied from a generic listing.",
        ],
        bullets: [
          "Inlet and outlet thread system, nominal size, mating parts and measured dimensions.",
          "Washer or seal location, required material and replacement-parts plan.",
          "Body and joint construction to be approved on the sample.",
          "Project-specific leak-test pressure, duration, valve positions and acceptance criteria.",
          "Expected valve cycling, installation clearance and hose loading.",
          "Natural brass or plated finish, logo method, bulk or OEM packaging and care instructions.",
        ],
      },
      {
        heading: "Choose outlet count after the failure mode is understood",
        paragraphs: [
          "A two-way splitter is not automatically more reliable than a four-way manifold, and a four-way product is not automatically better for every layout. Outlet count, valve spacing and available source flow belong in the selection decision; leak location belongs in the diagnostic decision.",
          "For assortment planning, use the separate 2-way versus 4-way buyer guide. For an existing leak, use the location-based checklist above before choosing a replacement or approving a production sample.",
        ],
      },
    ],
  },
  {
    slug: "why-garden-hose-connectors-leak",
    title: "Why Garden Hose Connectors Leak: A Buyer Checklist",
    description: "The product details B2B buyers should check before selecting quick connectors, adapters and hose-end sets.",
    topic: "Hose fittings",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-26",
    decisionGroups: [
      {
        problem: "Leak at the tap or threaded hose end",
        check: "First separate a damaged seal from a thread or size mismatch. Catalogue nominal sizes describe the listed model; they do not by themselves confirm compatibility with every tap or hose thread.",
        productSlugs: ["brass-connector-set-3601", "brass-female-nipple-adapter-3617", "brass-female-nipple-adapter-3619"],
        confirm: ["Mating male and female thread forms", "Target-market thread standard", "Required washer or O-ring position", "Measured connection dimensions"],
      },
      {
        problem: "Leak after repeated accessory changes",
        check: "Review whether the connection needs a standard quick connector or a water-stop configuration, then test the complete mating pair through repeated connect and disconnect cycles.",
        productSlugs: ["brass-quick-connector-3603", "brass-quick-connector-3604", "brass-water-stop-connector-3604z"],
        confirm: ["1/2 in or 3/4 in catalogue size", "Mating nipple profile", "Seal fit and replacement plan", "Cycle and leak test method"],
      },
      {
        problem: "Leak or strain at a bend or hose-reel inlet",
        check: "A right-angle connector or rotating hose-reel swivel may reduce awkward hose routing, but the inlet and outlet interfaces must be matched to the actual reel and hose assembly.",
        productSlugs: ["brass-90-degree-elbow-3638", "brass-elbow-connector-3639", "hose-reel-brass-swivel"],
        confirm: ["Reel inlet and hose-end interfaces", "Required rotation and installation clearance", "Seal location and service access", "Sample fit on the intended assembly"],
      },
    ],
    commercialLink: {
      href: "/solutions/brass-hose-connectors-manufacturer",
      label: "Review brass hose connector sourcing options",
      description: "Compare catalogue-backed connector families, OEM support and the information needed for a compatibility review.",
    },
    sections: [
      { heading: "The recurring complaint is usually not just the connector", paragraphs: ["Gardeners regularly report a new hose system leaking at the tap, reel or accessory connection. The visible leak is often blamed on the connector body, but the root cause can be a mismatched thread, a displaced washer, cross-threading or a seal compressed too hard.", "For importers and private-label programs, this is a useful reminder: a connector range should be specified as a system, not as isolated SKUs. The tap adapter, hose-end connector, quick connector and nozzle inlet all need to work together in the target market."] },
      { heading: "What to verify before placing an order", paragraphs: ["A practical buying brief should record the details that determine compatibility and reliable use."], bullets: ["Thread system and target market: confirm the required 1/2 in, 3/4 in, BSP or other market-specific format.", "Seal specification: request the washer material, fit and replacement-part option.", "Connection function: identify whether each position needs a standard quick connector, water-stop version, male adapter, female adapter or elbow.", "Assembly checks: test hand tightening, repeated connect/disconnect cycles and leak performance on the intended hose and tap configuration."] },
      { heading: "Build the assortment around real repair needs", paragraphs: ["A well-rounded hose fitting program should include more than one connector set. Buyers commonly need quick connectors, water-stop connectors, male and female nipple adapters, double male connectors, elbows, hose caps and hose protectors. These products solve the small connection problems that otherwise lead to returns or incomplete retail ranges.", "CIXI LINHAO can organize these LH-series fittings into retail packs, mixed assortments or OEM programs. Send the target market, thread preference and reference products to start a compatibility review."] },
    ],
  },
  {
    slug: "how-to-specify-a-durable-hose-nozzle-range",
    title: "How to Specify a Durable Hose Nozzle Range",
    description: "A sourcing guide for balancing spray control, serviceability, material choice and price positioning.",
    topic: "Watering tools",
    publishedAt: "2026-08-11",
    sections: [
      { heading: "Durability is the first question buyers hear from end users", paragraphs: ["Recent gardening discussions repeatedly focus on nozzles that leak, crack or lose spray control after one or two seasons. End users compare the purchase price with how often a nozzle must be replaced, so the product story needs to make the construction and intended use clear.", "There is no single best nozzle for every retail program. A basic twist nozzle, an adjustable multi-pattern nozzle and a watering wand each serve different jobs. The right assortment starts with the customer and the use case, not the largest possible setting count."] },
      { heading: "A practical specification framework", paragraphs: ["Use these points to define a durable, coherent nozzle range before sampling."], bullets: ["Material and stress points: identify which components are brass, metal or engineered plastic, particularly at the hose inlet and shut-off area.", "Spray use: match patterns to watering, gentle plant care, rinsing or stronger cleaning tasks.", "Serviceability: evaluate removable screens, washers, O-rings and parts that may need seasonal replacement.", "Ergonomics: check grip, trigger or twist action, operating force and one-handed use.", "Packaging level: offer a value retail option and a premium metal-focused option without confusing the shopper."] },
      { heading: "Do not overlook seasonal care", paragraphs: ["Outdoor fittings are exposed to UV, hard water, accidental drops and freezing conditions. Clear care instructions—draining water before storage, avoiding prolonged pressure when unused and replacing worn seals—help protect the product experience.", "For B2B buyers, including a simple care card and a replacement-washer option can add more value than adding unnecessary functions. It also gives the range a credible after-sales story."] },
    ],
  },
  {
    slug: "choosing-a-garden-hose-splitter",
    title: "Choosing a Garden Hose Splitter: 2-Way, 4-Way and Pressure Considerations",
    description: "A buyer guide to outlet count, independent valves, seal design and pressure-aware assortment planning.",
    topic: "Irrigation planning",
    publishedAt: "2026-08-11",
    sections: [
      { heading: "More outlets do not automatically mean a better solution", paragraphs: ["Hose splitter complaints commonly mention leaks, low flow and valves that feel difficult to use. A splitter should be chosen for the actual watering layout: two zones may need a compact 2-way model, while a greenhouse or mixed irrigation setup may need a 4-way manifold with separate control at each outlet.", "Water pressure also matters. Splitting one supply among several open lines reduces the available flow at each outlet. Buyers should avoid presenting a manifold as a cure for low source pressure and instead explain the intended number of simultaneously active zones."] },
      { heading: "Key points for a stronger splitter program", paragraphs: ["During sourcing and sample review, check the details that buyers and end users notice first."], bullets: ["Outlet count and spacing: make sure hose connectors can be attached and removed without interference.", "Independent shut-off valves: confirm smooth operation and clear open/close positioning.", "Body and joint design: review the connection between the inlet, manifold and outlet valves under normal working pressure.", "Seal and washer access: include replacement options for the parts most likely to wear.", "Product positioning: offer a simple 2-way item for everyday use and a higher-capacity 4-way option for multi-zone watering."] },
      { heading: "Create a range, not a one-SKU compromise", paragraphs: ["The strongest program combines splitters with matching quick connectors, shut-off valves, hose protectors and nozzles. This gives the buyer a logical system and gives retail customers a clear next purchase when their layout expands.", "CIXI LINHAO offers LH-series brass splitters and complementary hose fittings for custom assortment planning. Share your target retail channel, price tier and packaging format for a tailored recommendation."] },
    ],
  },
];
