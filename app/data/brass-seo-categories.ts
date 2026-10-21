import type { BrassProductCategory } from "./products";

export type BrassSeoCategory = {
  slug: string;
  category: BrassProductCategory;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  updatedAt?: string;
  customBrief?: string;
  buyerQuestions: string[];
  selectionGuide?: {
    heading: string;
    introduction: string;
    options: { heading: string; description: string; href?: string; linkLabel?: string }[];
  };
  relatedResources?: { href: string; label: string; description: string }[];
  faqs?: { question: string; answer: string }[];
};

export const brassSeoCategories: BrassSeoCategory[] = [
  {
    slug: "brass-quick-connectors",
    updatedAt: "2026-10-20",
    customBrief: "For a custom brass quick connector, send the mating nipple or accessory and the hose-side connection. Identify the locking arrangement, water-stop requirement, seal location and space available for the grip. Approve the complete mating pair as part of sample review.",
    category: "Brass Quick Connectors",
    label: "Brass Quick Connectors",
    h1: "Custom Brass Quick Connectors for Garden Hoses",
    metaTitle: "Custom Brass Quick Connectors | OEM Hose Fittings",
    metaDescription: "Compare brass quick connectors and water-stop connector options for garden hoses. Review mating parts, thread sizes, finishes and OEM packaging before quotation.",
    introduction: "Use this category when buyers need repeat hose or accessory changes. The mating nipple, hose-side connection, water-stop requirement and target market must be confirmed before sampling.",
    buyerQuestions: ["Which mating nipple or accessory must connect?", "Is a water-stop function required?", "What hose size and target-market standard apply?", "What finish, logo and packaging format are required?"],
  },
  {
    slug: "brass-hose-adapters",
    updatedAt: "2026-10-20",
    customBrief: "Specify a custom brass hose adapter as two separate interfaces: end A and end B. For each end, provide thread standard, size, pitch, male/female orientation and sealing surface. Include overall length, wrench access and bore requirements on the drawing.",
    category: "Brass Threaded Adapters",
    label: "Brass Hose Adapters",
    h1: "Custom Brass Hose Adapters & Threaded Fittings",
    metaTitle: "Custom Brass Hose Adapters | Threaded Fitting Manufacturer",
    metaDescription: "Source brass garden hose adapters in male, female, reducing and double-male configurations. Confirm GHT, BSP, NPT or custom thread requirements.",
    introduction: "Threaded adapters connect different hose, tap or accessory interfaces. Quote review should define both ends, thread form, nominal size, pitch, tolerance, sealing method and mating components.",
    buyerQuestions: ["What connection is required on each end?", "Is the thread GHT, BSP, NPT, metric or custom?", "Which surface provides the seal?", "Is a natural-brass or plated finish required?"],
  },
  {
    slug: "brass-hose-couplings",
    updatedAt: "2026-10-20",
    customBrief: "A custom brass hose coupling must suit the hose as well as the mating fitting. Provide hose inner and outer diameters, hose construction, retention method and the complete assembly drawing. State any pull-off, sealing or inspection requirement for engineering review.",
    category: "Brass Hose Couplings",
    label: "Brass Hose Couplings",
    h1: "Brass Garden Hose Couplings for Custom Assemblies",
    metaTitle: "Brass Hose Couplings | Custom Garden Hose Connections",
    metaDescription: "Browse brass garden hose couplings and connector sets for compatible hose assemblies. Review size, mating parts, thread, seal and OEM packaging requirements.",
    introduction: "Coupling selection begins with the complete assembly rather than a single nominal size. Provide both mating components, hose dimensions and the intended installation method.",
    buyerQuestions: ["What are the two mating components?", "What hose inner and outer dimensions apply?", "Is the connection threaded, clamped or quick-connect?", "What assembly and packaging requirements apply?"],
  },
  {
    slug: "brass-elbow-fittings",
    updatedAt: "2026-10-20",
    customBrief: "For a custom brass elbow, mark the required angle, centreline distances and clearance envelope. Define both thread interfaces and confirm whether the connection must remain fixed or rotate. These details help prevent a correctly threaded part from fouling the surrounding assembly.",
    category: "Brass Elbow Fittings",
    label: "Brass Elbow Fittings",
    h1: "Brass Elbow Fittings for Garden Hose Routing",
    metaTitle: "Custom Brass Elbow Fittings for Garden Hose Routing",
    metaDescription: "Review 90-degree brass elbow fittings for compact garden hose routing. Confirm thread standard, centreline dimensions, clearance, seal and mating components.",
    introduction: "Elbow fittings solve direction and clearance constraints. A useful quotation needs the thread at each interface plus the centreline, overall envelope and installation clearance.",
    buyerQuestions: ["What angle and centreline dimensions are required?", "How much installation clearance is available?", "What thread and seal apply at each end?", "Must the body swivel or remain fixed?"],
  },
  {
    slug: "brass-hose-splitters",
    updatedAt: "2026-10-20",
    customBrief: "For an OEM brass hose splitter, specify outlet count, each inlet/outlet connection, branch spacing and any individual shut-off controls. Provide the tap installation space and intended hose layout. A plain Y fitting such as LH-3672A does not include independent outlet valves.",
    category: "Brass Hose Splitters",
    label: "Brass Hose Splitters",
    h1: "Brass Hose Splitter Manufacturer for 2-Way & Multi-Way Supply",
    metaTitle: "Brass Hose Splitter Manufacturer | 2-Way & Multi-Way",
    metaDescription: "Source 2-way and multi-way brass hose splitters for B2B and OEM programs. Compare outlet count, 1/2 in or 3/4 in GHT options, samples and packaging requirements.",
    introduction: "Compare brass hose splitter configurations for import, distribution and private-label programs. Define the tap-side inlet, every outlet, required control layout, installation clearance and target packaging before sample approval.",
    buyerQuestions: ["How many outlets does the watering layout require?", "What size and thread apply to the inlet and every outlet?", "Which outlets require individual flow control?", "What sample, inspection and packaging requirements must be approved?"],
    selectionGuide: {
      heading: "Choose outlet count before requesting a sample.",
      introduction: "Outlet count is a layout decision, not a quality grade. Match the splitter to the number of simultaneous watering lines, available tap clearance and required controls, then confirm every mating connection.",
      options: [
        {
          heading: "2-way brass hose splitter",
          description: "Use when one compatible garden tap needs to feed two hose lines. LH-3672A is a plain Y fitting, not an independently valved splitter. It has confirmed 1/2 in and 3/4 in GHT options, MOQ 500 pcs and samples available. If each branch must shut off separately, request a valved configuration or separate valves.",
          href: "/products/brass-two-way-splitter-3672a",
          linkLabel: "Review LH-3672A specifications",
        },
        {
          heading: "Multi-way brass hose splitter",
          description: "Use when the planned layout requires more than two outlets. Confirm outlet spacing, control requirements, source-flow conditions and installation clearance before choosing the configuration.",
          href: "/products#four-way-splitters",
          linkLabel: "Review multi-way splitter options",
        },
        {
          heading: "4-way brass hose splitter",
          description: "Use for four planned branches only after confirming that the tap location can accommodate the manifold and connected hoses. Final connections and controls follow the approved specification.",
          href: "/products#four-way-splitters",
          linkLabel: "Review 4-way splitter options",
        },
      ],
    },
    relatedResources: [
      {
        href: "/resources/choosing-a-garden-hose-splitter",
        label: "2-Way vs 4-Way Hose Splitter Buyer Guide",
        description: "Compare outlet count, source flow, valve spacing and installation requirements before selecting a sample.",
      },
      {
        href: "/resources/garden-hose-splitter-leaking-diagnostic-guide",
        label: "Garden Hose Splitter Leak Diagnostic Guide",
        description: "Separate inlet, body, branch, valve and outlet leak locations before defining inspection requirements.",
      },
    ],
    faqs: [
      {
        question: "Does a brass 2-way Y splitter control each hose independently?",
        answer: "A plain Y fitting such as LH-3672A divides the connection but has no individual outlet shut-off valves. Specify a valved splitter or separate shut-off valves when either hose needs independent control. Available flow also depends on the water supply and downstream hoses, not just the outlet count.",
      },
      {
        question: "Should a buyer choose a 2-way or multi-way brass hose splitter?",
        answer: "Choose the outlet count from the actual watering layout, available tap clearance and required controls. A 2-way splitter serves two planned hose lines; a multi-way configuration is considered when the layout requires more outlets.",
      },
      {
        question: "Which GHT sizes are confirmed for the LH-3672A 2-way splitter?",
        answer: "LH-3672A has confirmed 1/2 in and 3/4 in GHT options. The required size must be assigned to the tap-side inlet and each outlet so the mating parts can be reviewed before quotation.",
      },
      {
        question: "What should an OEM hose splitter enquiry include?",
        answer: "Send the outlet count, inlet and outlet connections, target market, mating parts, required controls, installation clearance, target quantity, packaging requirements and any sample-inspection criteria.",
      },
      {
        question: "How should a leaking splitter be evaluated?",
        answer: "First identify whether the leak is at the tap inlet, body or seam, branch or valve area, outlet, or downstream hose coupling. Each location requires a different compatibility and inspection check.",
      },
    ],
  },
  {
    slug: "brass-shut-off-valves",
    updatedAt: "2026-10-20",
    customBrief: "For a custom brass hose shut-off valve, provide both end connections, the handle operating envelope, sealing requirements and intended fluid and operating conditions. Agree the inspection method and acceptance criteria before approving production; pressure ratings are model-specific.",
    category: "Brass Shut-Off Valves",
    label: "Brass Shut-Off Valves",
    h1: "Brass Garden Hose Shut-Off Valves",
    metaTitle: "Brass Garden Hose Shut-Off Valves | OEM Manufacturing",
    metaDescription: "Review in-line brass garden hose shut-off valve options for hose-end flow control. Define thread, handle, flow direction, seal and OEM packaging.",
    introduction: "Shut-off valves are specified around the mating hose parts, operating direction and required control layout. Confirm the intended fluid and operating conditions before seal selection.",
    buyerQuestions: ["Where will the valve be installed?", "What are the inlet and outlet connections?", "What handle shape and operating direction are required?", "What seal and finish requirements apply?"],
  },
  {
    slug: "brass-hose-nozzles",
    category: "Brass Nozzles",
    label: "Brass Hose Nozzles",
    h1: "Brass Hose Nozzles & Spray Components",
    metaTitle: "Brass Hose Nozzles & Spray Components",
    metaDescription: "Browse brass twist hose nozzles and spray components for watering and cleaning. Confirm connection, spray adjustment, finish, branding and retail packaging.",
    introduction: "Nozzle selection depends on the hose connection, required spray adjustment and user interface. Retail projects should also define branding, artwork and packaging.",
    buyerQuestions: ["What hose connection is required?", "Which spray or flow adjustment is needed?", "What grip, finish or branding should be used?", "Is bulk, retail or private-label packaging required?"],
  },
  {
    slug: "hose-reel-brass-fittings",
    updatedAt: "2026-10-20",
    customBrief: "For a custom hose-reel brass fitting, send the reel-side assembly and hose-side connection drawing. Mark the rotation axis, installation envelope and required swivel movement. Confirm the seal arrangement and operating conditions with the mating components before sample approval.",
    category: "Hose Reel Brass Fittings",
    label: "Hose Reel Brass Fittings",
    h1: "Hose Reel Brass Fittings & Swivel Elbows",
    metaTitle: "Custom Hose Reel Brass Fittings & Swivel Elbows",
    metaDescription: "Review hose reel brass fittings and 360-degree swivel elbow options for water-inlet assemblies. Confirm interfaces, dimensions, rotation, seal and application.",
    introduction: "Hose reel inlet fittings must align with the reel, hose and rotating seal arrangement. Provide the mating components, envelope dimensions and operating conditions for engineering review.",
    buyerQuestions: ["What reel-side and hose-side interfaces are required?", "What rotation and installation clearance are needed?", "What dimensions control alignment?", "What seal material and operating conditions apply?"],
  },
];

export const getBrassSeoCategoryBySlug = (slug: string) =>
  brassSeoCategories.find((item) => item.slug === slug);

export const getBrassSeoCategoryByName = (category: BrassProductCategory) =>
  brassSeoCategories.find((item) => item.category === category);

