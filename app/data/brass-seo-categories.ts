import type { BrassProductCategory } from "./products";

export type BrassSeoCategory = {
  slug: string;
  category: BrassProductCategory;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  buyerQuestions: string[];
};

export const brassSeoCategories: BrassSeoCategory[] = [
  {
    slug: "brass-quick-connectors",
    category: "Brass Quick Connectors",
    label: "Brass Quick Connectors",
    h1: "Brass Quick Connectors for Garden Hose Systems",
    metaTitle: "Brass Quick Connectors for Garden Hose Systems",
    metaDescription: "Compare brass quick connectors and water-stop connector options for garden hoses. Review mating parts, thread sizes, finishes and OEM packaging before quotation.",
    introduction: "Use this category when buyers need repeat hose or accessory changes. The mating nipple, hose-side connection, water-stop requirement and target market must be confirmed before sampling.",
    buyerQuestions: ["Which mating nipple or accessory must connect?", "Is a water-stop function required?", "What hose size and target-market standard apply?", "What finish, logo and packaging format are required?"],
  },
  {
    slug: "brass-hose-adapters",
    category: "Brass Threaded Adapters",
    label: "Brass Hose Adapters",
    h1: "Brass Hose Adapters & Threaded Fittings",
    metaTitle: "Brass Hose Adapters & Threaded Fittings",
    metaDescription: "Source brass garden hose adapters in male, female, reducing and double-male configurations. Confirm GHT, BSP, NPT or custom thread requirements.",
    introduction: "Threaded adapters connect different hose, tap or accessory interfaces. Quote review should define both ends, thread form, nominal size, pitch, tolerance, sealing method and mating components.",
    buyerQuestions: ["What connection is required on each end?", "Is the thread GHT, BSP, NPT, metric or custom?", "Which surface provides the seal?", "Is a natural-brass or plated finish required?"],
  },
  {
    slug: "brass-hose-couplings",
    category: "Brass Hose Couplings",
    label: "Brass Hose Couplings",
    h1: "Brass Garden Hose Couplings",
    metaTitle: "Brass Garden Hose Couplings for OEM Sourcing",
    metaDescription: "Browse brass garden hose couplings and connector sets for compatible hose assemblies. Review size, mating parts, thread, seal and OEM packaging requirements.",
    introduction: "Coupling selection begins with the complete assembly rather than a single nominal size. Provide both mating components, hose dimensions and the intended installation method.",
    buyerQuestions: ["What are the two mating components?", "What hose inner and outer dimensions apply?", "Is the connection threaded, clamped or quick-connect?", "What assembly and packaging requirements apply?"],
  },
  {
    slug: "brass-elbow-fittings",
    category: "Brass Elbow Fittings",
    label: "Brass Elbow Fittings",
    h1: "Brass Elbow Fittings for Garden Hose Routing",
    metaTitle: "Brass Elbow Fittings for Garden Hose Routing",
    metaDescription: "Review 90-degree brass elbow fittings for compact garden hose routing. Confirm thread standard, centreline dimensions, clearance, seal and mating components.",
    introduction: "Elbow fittings solve direction and clearance constraints. A useful quotation needs the thread at each interface plus the centreline, overall envelope and installation clearance.",
    buyerQuestions: ["What angle and centreline dimensions are required?", "How much installation clearance is available?", "What thread and seal apply at each end?", "Must the body swivel or remain fixed?"],
  },
  {
    slug: "brass-hose-splitters",
    category: "Brass Hose Splitters",
    label: "Brass Hose Splitters",
    h1: "Brass Hose Splitters for Multi-Line Watering",
    metaTitle: "Brass Hose Splitters for Multi-Line Watering",
    metaDescription: "Compare two-way and multi-way brass hose splitter configurations for garden taps. Confirm inlet, outlets, GHT size, valve controls and packaging.",
    introduction: "Splitter projects should define the tap-side inlet, every outlet, control-valve layout and available clearance. Two-way and multi-way formats serve different watering layouts.",
    buyerQuestions: ["How many independently controlled outlets are needed?", "What inlet and outlet sizes apply?", "Which GHT or other thread standard is required?", "What handle, seal and packaging options are required?"],
  },
  {
    slug: "brass-shut-off-valves",
    category: "Brass Shut-Off Valves",
    label: "Brass Shut-Off Valves",
    h1: "Brass Garden Hose Shut-Off Valves",
    metaTitle: "Brass Garden Hose Shut-Off Valves",
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
    category: "Hose Reel Brass Fittings",
    label: "Hose Reel Brass Fittings",
    h1: "Hose Reel Brass Fittings & Swivel Elbows",
    metaTitle: "Hose Reel Brass Fittings & Swivel Elbows",
    metaDescription: "Review hose reel brass fittings and 360-degree swivel elbow options for water-inlet assemblies. Confirm interfaces, dimensions, rotation, seal and application.",
    introduction: "Hose reel inlet fittings must align with the reel, hose and rotating seal arrangement. Provide the mating components, envelope dimensions and operating conditions for engineering review.",
    buyerQuestions: ["What reel-side and hose-side interfaces are required?", "What rotation and installation clearance are needed?", "What dimensions control alignment?", "What seal material and operating conditions apply?"],
  },
];

export const getBrassSeoCategoryBySlug = (slug: string) =>
  brassSeoCategories.find((item) => item.slug === slug);

export const getBrassSeoCategoryByName = (category: BrassProductCategory) =>
  brassSeoCategories.find((item) => item.category === category);
