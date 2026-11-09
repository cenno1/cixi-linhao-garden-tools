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
    slug: "ght-to-npt-brass-adapter-3-4-1-inch-guide",
    title: 'GHT to NPT Brass Adapters: 3/4-Inch and 1-Inch Selection Guide',
    description: 'Choose a brass adapter for 3/4-inch GHT and 3/4-inch or 1-inch NPT. Compare thread pitch, male/female ends, washer sealing and custom-order requirements.',
    topic: "Brass adapter selection",
    publishedAt: "2026-10-26",
    commercialLink: {
      href: "/products/categories/brass-hose-adapters",
      label: "Discuss a Custom Brass Hose Adapter",
      description: "Review the adapter family, then send both mating-end specifications to Cixi Linhao Metal Product Co., Ltd. A catalogue nominal size is not confirmation of a particular GHT-to-NPT configuration; feasibility, material and sample requirements need project review.",
    },
    sections: [
      {
        heading: "Quick answer: specify both ends, not just the size",
        paragraphs: ['A 3/4-inch GHT connection does not directly mate with 3/4-inch NPT. A purpose-made adapter provides a separate, correctly specified thread on each end. For a 1-inch pipe port, specify the pipe end as 1-inch NPT and the garden-hose end separately as 3/4-inch GHT. Also state whether each adapter end must be male or female.', 'This guide covers water-side garden hose connections. It does not establish suitability for a pressure washer high-pressure outlet, gas service or drinking water. Application ratings and compliance must be confirmed for the actual assembly.'],
      },
      {
        heading: "What garden-hose buyers are asking on Reddit",
        paragraphs: ['Three discussions illustrate distinct selection problems: a community gardener trying to connect a ground hydrant described as a 1-inch outlet; a pressure-washing user connecting a 1-inch hose through a leaking NPT/GHT mismatch; and a homeowner searching for an adapter for an older spigot described as 1-inch garden-hose thread. These are useful problem signals, not verified thread identifications or evidence of search volume.', 'The practical lesson is to record the two existing connections before shopping. A photograph can show the general arrangement but cannot reliably establish thread pitch, taper or a proprietary outlet. Do not copy a suggested adapter from a discussion unless your own interfaces have been identified.'],
      },
      {
        heading: "3/4-inch GHT versus 3/4-inch NPT versus 1-inch NPT",
        paragraphs: ['Dixon technical references list 3/4-inch GHT at 11.5 threads per inch, 3/4-inch NPT at 14 TPI and 1-inch NPT at 11.5 TPI. NPT is tapered. Matching pitch alone is not matching geometry: 1-inch NPT and 3/4-inch GHT remain different connections even though both use 11.5 TPI.', 'Use these figures for identification, not as a production drawing or tolerance specification. Check the applicable standard and approved gauges before manufacture.'],
        bullets: ['3/4-inch GHT: straight garden-hose thread; the usual hose coupling seals at a washer and mating face.', '3/4-inch NPT: tapered pipe thread, 14 TPI; do not force it into a hose swivel nut.', '1-inch NPT: tapered pipe thread, 11.5 TPI; a separate GHT interface is required for a standard garden-hose connection.', 'NH, NPS, BSP and NPT markings are not interchangeable labels. Obtain the full designation for an uncertain part.'],
      },
      {
        heading: 'Does "1-inch garden hose adapter" mean 1-inch NPT?',
        paragraphs: ['Not necessarily. The number may describe the hose inside diameter, a hose-barb size, a nominal pipe thread or an incompletely identified faucet outlet. A 1-inch hose barb and a 1-inch NPT thread are different interface types. Neither proves that the other end is GHT.', 'For an existing hydrant or older faucet, obtain its manufacturer and model, thread designation and dimensions. Do not remove or bypass a vacuum breaker or backflow device to make an adapter fit; use an approved connection for that equipment.'],
        bullets: ['If 1 inch describes the hose bore, specify a hose-barb connection and clamp requirements separately from the threaded end.', 'If the port is verified 1-inch NPT, request 1-inch NPT on that adapter end and identify the opposite GHT end.', 'If the outlet is only described as 1-inch hose thread, stop and identify it rather than ordering by the number alone.'],
      },
      {
        heading: "Select the male and female ends",
        paragraphs: ['The configurations below describe adapter ends, not the existing equipment ends. They are quotation examples, not claims of stock availability. Use the opposite gender to each verified mating connection.'],
        bullets: ['Existing female GHT hose coupling + female 3/4-inch NPT port: request male 3/4-inch GHT × male 3/4-inch NPT.', 'Existing female GHT hose coupling + male 3/4-inch NPT pipe end: request male 3/4-inch GHT × female 3/4-inch NPT.', 'Existing female GHT hose coupling + female 1-inch NPT port: request male 3/4-inch GHT × male 1-inch NPT.', 'Existing male GHT outlet + male 1-inch NPT pipe end: request female 3/4-inch GHT × female 1-inch NPT; confirm washer seat and assembly access.'],
      },
      {
        heading: "Washer or thread sealant: check each side separately",
        paragraphs: ['On a conventional washer-sealed GHT joint, inspect the washer, sealing face and seating depth. Thread tape is not a replacement for the washer and cannot fix incompatible threads. On the NPT side, follow the component manufacturer instructions for compatible sealant and tightening; do not apply a universal tape-wrap or torque rule to every material.', 'Shut off and depressurize the system before changing fittings. Stop if a connection binds, cross-threads or requires force to start. After installation, check each joint under the approved operating conditions. A larger nominal adapter does not guarantee higher flow; the minimum bore and the complete hose system also matter.'],
      },
      {
        heading: "Custom brass adapter enquiry checklist",
        paragraphs: ['A useful engineering enquiry separates confirmed facts from requested options. Send a dimensioned drawing or mating samples rather than only asking for a brass 1-inch adapter. LINHAO can review custom brass-component requirements; a specific alloy, finish, pressure rating or certification is not implied by the word brass.'],
        bullets: ['End A and end B: standard, nominal size, pitch, male/female and sealing method.', 'Geometry: overall length, minimum bore, hex clearance, washer-seat detail and swivel requirement.', 'Material and finish: required brass grade, surface finish and any application-specific compliance.', 'Service: fluid, temperature, working pressure, target market and agreed inspection criteria.', 'Order: estimated quantity, sample approval requirements, markings and packaging.'],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: ['Can 3/4-inch NPT screw directly into 3/4-inch GHT? No. Specify a correctly made adapter; similar nominal labels do not establish compatibility.', 'Can I connect a 1-inch NPT port to a standard garden hose? A suitably specified adapter can bridge the two interfaces. Confirm gender, clearance, sealing faces and operating limits before ordering.', 'Is every brass hose adapter suitable for drinking water? No such assumption should be made. Ask for the exact material and applicable compliance documentation for the intended market.', 'Should I order by a photograph? Use photographs as supporting evidence, together with measurements, equipment identification and an approved drawing or sample.'],
      },
    ],
    sources: [
      { label: "Reddit: Help with hose adapter", href: "https://www.reddit.com/r/askplumbing/comments/1tzsgmc/help_with_hose_adapter/", note: "Community-garden hydrant question; discussion signal only, not confirmation of the pictured thread." },
      { label: "Reddit: Fittings", href: "https://www.reddit.com/r/pressurewashing/comments/1g316h7/fittings/", note: "A 1-inch hose and NPT/GHT mismatch discussion. Not a pressure-rating reference." },
      { label: "Reddit: How to connect to a 1-inch garden hose thread spigot?", href: "https://www.reddit.com/r/askaplumber/comments/1d9k6wt/how_to_connect_to_a_1_garden_hose_thread_spigot/", note: "Illustrates ambiguous outlet identification; commenters' proposed adapters are not endorsed here." },
      { label: "Dixon: Threads 101", href: "https://dixonvalve.com/en/news-and-events/news/threads-101", note: "Primary technical explanation of thread identification, taper and compatibility." },
      { label: "Dixon: Hose Coupling technical reference", href: "https://europe.dixonvalve.com/sites/default/files/documents/Hose-Coupling.pdf", note: "Thread-dimension table and sealing reference; supports GHT and NPT pitch distinctions." },
      { label: "Dixon: Male GHT × Male NPT adapter", href: "https://dixonvalve.com/en/products/508-series-garden-hose-adapter/5141212ss", note: "Manufacturer example specifies 3/4-11.5 GHT and 3/4-14 NPT separately. Its material and product ratings are not LINHAO specifications." },
    ],
  },
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
        productSlugs: ["brass-two-way-splitter-3672a", "brass-4-way-hose-splitter-3201"],
        confirm: ["Tap and splitter thread systems", "Nominal size plus measured mating dimensions", "Washer location, condition and compression", "Hand-start engagement without cross-threading"],
      },
      {
        problem: "Leak at the manifold body or branch joint",
        check: "A body seam, pinhole or branch-joint leak is a different failure mode from an inlet-washer leak. Stop the water, isolate the exact point and replace a cracked sample rather than trying to cure the body with more inlet torque.",
        productSlugs: ["brass-two-way-splitter-3672a", "brass-4-way-hose-splitter-3201"],
        confirm: ["Approved body and joint construction", "Test pressure and duration from the buyer specification", "All outlets open and closed during sample checks", "Visual inspection criteria after testing"],
      },
      {
        problem: "Leak at an outlet or valve stem",
        check: "Check whether water appears at the outlet washer interface, around the valve stem or from the downstream hose coupling. These locations require different corrective actions and should be recorded separately during sample approval.",
        productSlugs: ["brass-4-way-hose-splitter-3201", "brass-hose-shut-off-valve-3001"],
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
