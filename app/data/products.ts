const assetBase =
  process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "/images/products";

export type ProductCategory =
  | "Watering & Irrigation"
  | "Brass Fittings & Valves"
  | "Garden Hand Tools"
  | "Tool Kits & Accessories";

export type Product = {
  slug: string;
  name: string;
  code: string;
  category: ProductCategory;
  image: string;
  images?: { src: string; alt: string }[];
  updatedAt?: string;
  summary: string;
  features: string[];
  applications: string[];
};

export const categories = [
  {
    name: "Watering & Irrigation" as const,
    description: "Sprinklers, nozzles and watering solutions for efficient outdoor care.",
    image: `${assetBase}/sprinklers.webp`,
  },
  {
    name: "Brass Fittings & Valves" as const,
    description: "Durable hose connectors, splitters, shut-off valves and repair fittings.",
    image: `${assetBase}/brass-connectors.webp`,
  },
  {
    name: "Garden Hand Tools" as const,
    description: "Stainless steel and aluminum tools designed for dependable daily use.",
    image: `${assetBase}/garden-hand-tools.webp`,
  },
  {
    name: "Tool Kits & Accessories" as const,
    description: "Retail-ready sets, tool bags, pruning kits and customized assortments.",
    image: `${assetBase}/garden-tool-kits.webp`,
  },
];

const brassConnector = (
  code: string,
  slug: string,
  name: string,
  summary: string,
  features: string[] = ["Solid brass construction", "Common garden-hose sizes", "OEM packaging", "Specification confirmation available"],
): Product => ({
  slug,
  name,
  code,
  category: "Brass Fittings & Valves",
  image: `${assetBase}/catalogue/${code.toLowerCase()}.jpg`,
  summary,
  features,
  applications: ["Garden hoses", "Sprinklers", "Nozzles", "Irrigation lines"],
});

const brassConnectorModels: Product[] = [
  brassConnector("LH-3601", "brass-connector-set-3601", "Brass Female & Male Connector Set", "3/4 in brass connector set for standard garden hose systems."),
  brassConnector("LH-3602A", "brass-connector-set-3602a", "Brass Female & Male Connector Set", "3/4 in brass connector set with a durable, serviceable fitting design."),
  brassConnector("LH-3617", "brass-female-nipple-adapter-3617", "Brass Female Nipple Adapter", "Female adapter for 1/2 in to 3/4 in hose connections."),
  brassConnector("LH-3619", "brass-female-nipple-adapter-3619", "Brass Female Nipple Adapter", "Female adapter for 3/4 in to 1 in hose connections."),
  brassConnector("LH-3603", "brass-quick-connector-3603", "Brass Hose Quick Connector", "3/4 in quick connector for garden hose and watering-tool changes."),
  brassConnector("LH-3604", "brass-quick-connector-3604", "Brass Hose Quick Connector", "1/2 in quick connector for compact hose configurations."),
  brassConnector("LH-3624A", "brass-male-nipple-adapter-3624a", "Brass Male Nipple Adapter", "3/4 in male nipple adapter for hose-end connections."),
  brassConnector("LH-3624AP", "nickel-plated-male-adapter-3624ap", "Nickel-Plated Brass Male Nipple Adapter", "3/4 in nickel-plated male nipple adapter for a refined finish option."),
  brassConnector("LH-3604Z", "brass-water-stop-connector-3604z", "Brass Water-Stop Quick Connector", "1/2 in water-stop quick connector to simplify accessory changes.", ["Solid brass construction", "Water-stop configuration", "1/2 in connection", "OEM packaging"]),
  brassConnector("LH-3608", "brass-connector-set-3608", "Brass Female & Male Connector Set", "3/4 in brass set for routine watering and irrigation connections."),
  brassConnector("LH-3636", "brass-connector-set-3636", "Brass Female & Male Connector Set", "3/4 in connector set for garden hose programs."),
  brassConnector("LH-3637", "brass-connector-set-3637", "Brass Female & Male Connector Set", "3/4 in connector set with catalogue-specified component pairing."),
  brassConnector("LH-3638", "brass-90-degree-elbow-3638", "Brass 90° Elbow Connector", "3/4 in right-angle elbow for tidy hose routing."),
  brassConnector("LH-3639", "brass-elbow-connector-3639", "Brass Elbow Connector", "3/4 in elbow connector for directional hose transitions."),
  brassConnector("LH-3639A", "brass-elbow-connector-3639a", "Brass Elbow Connector", "3/4 in elbow connector variation for hose and tap layouts."),
  brassConnector("LH-3610", "brass-connector-set-3610", "Brass Female & Male Connector Set", "1/2 in brass set for compact watering assemblies."),
  brassConnector("LH-3616", "brass-female-connector-set-3616", "Brass Female Connector Set", "3/4 in female connector set for common outdoor watering equipment."),
  brassConnector("LH-3641", "brass-double-male-connector-3641", "Brass Double Male Connector", "3/4 in double male connector for joining compatible hose fittings."),
  brassConnector("LH-3642", "brass-double-male-connector-3642", "Brass Double Male Connector", "3/4 in double male connector variation for hose repair and extension."),
  brassConnector("LH-3656", "brass-female-connector-3656", "Brass Female Connector", "3/4 in brass female connector for garden hose assemblies."),
  brassConnector("LH-3652A", "brass-male-connector-3652a", "Brass Male Connector", "1/2 in to 3/4 in brass male connector for hose adaptation."),
  brassConnector("LH-3681", "brass-female-connector-3681", "Brass Female Connector", "5/8 in to 3/4 in brass female connector."),
  brassConnector("LH-3682", "brass-female-connector-3682", "Brass Female Connector", "5/8 in to 3/4 in brass female connector variation."),
  brassConnector("LH-365Y", "brass-female-connector-365y", "Brass Female Connector", "1/2 in to 3/4 in brass female connector."),
  brassConnector("LH-9812", "brass-hose-cap-9812", "Brass Hose Cap", "3/4 in brass hose cap for closing unused hose ends."),
  brassConnector("LH-9812AP", "nickel-plated-hose-cap-9812ap", "Nickel-Plated Brass Hose Cap", "3/4 in nickel-plated brass hose cap."),
  brassConnector("LH-3672A", "brass-two-way-splitter-3672a", "Brass 2-Way Hose Splitter", "3/4 in brass splitter for running two watering lines from one tap."),
  brassConnector("LH-3630", "hose-protector-3630", "Hose Protector with PVC Hose", "3/4 in hose protector with PVC hose section for reducing sharp bends."),
  brassConnector("LH-3630A", "hose-protector-3630a", "Hose Protector with PVC Hose", "3/4 in hose protector variation with PVC hose section."),
];

export const products: Product[] = [
  {
    slug: "hose-reel-brass-swivel",
    name: "Hose Reel Brass Swivel",
    code: "LH-HRS Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/hose-reel-brass-swivel.png`,
    updatedAt: "2026-08-22",
    images: [
      {
        src: `${assetBase}/hose-reel-brass-swivel.png`,
        alt: "Hose reel brass swivel elbow installed on a reel and shown from two angles",
      },
      {
        src: `${assetBase}/hose-reel-brass-swivel-360-rotation.png`,
        alt: "Brass hose reel swivel showing the 360 degree rotating joint and installation position",
      },
    ],
    summary: "360° rotating brass swivel elbow for hose reel water-inlet connections and OEM replacement assemblies.",
    features: [
      "Brass body",
      "360° rotating swivel joint",
      "Compact 90° elbow layout",
      "Thread, seal and size confirmed before quotation",
    ],
    applications: ["Hose reels", "Retractable hose reels", "Garden hose storage systems", "Replacement and OEM assemblies"],
  },
  {
    slug: "brass-quick-connectors",
    name: "Brass Quick Connectors",
    code: "LH-BHC Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/brass-connectors.webp`,
    summary: "Quick-connect and water-stop configurations for common garden hose systems.",
    features: ["Brass body", "EU / US thread options", "Water-stop option", "OEM packaging"],
    applications: ["Garden hoses", "Nozzles", "Sprinklers", "Hose repair"],
  },
  {
    slug: "multi-way-hose-splitters",
    name: "Multi-Way Hose Splitters",
    code: "LH-BSP Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/hose-splitters.webp`,
    summary: "Two-way and four-way brass manifolds with independent flow control.",
    features: ["2-way / 4-way options", "Independent shut-off", "Heavy-duty brass", "Custom handle colors"],
    applications: ["Multi-zone watering", "Garden taps", "Greenhouses", "Irrigation lines"],
  },
  {
    slug: "metal-garden-sprinklers",
    name: "Metal Garden Sprinklers",
    code: "LH-SPR Series",
    category: "Watering & Irrigation",
    image: `${assetBase}/sprinklers.webp`,
    summary: "Rotary, impact and tripod sprinkler options for lawns and garden areas.",
    features: ["Multiple spray patterns", "Metal construction", "Adjustable coverage", "Retail-ready sets"],
    applications: ["Lawns", "Nurseries", "Vegetable gardens", "Landscape watering"],
  },
  {
    slug: "watering-nozzles-valves",
    name: "Watering Nozzles & Shut-Off Valves",
    code: "LH-NOZ Series",
    category: "Watering & Irrigation",
    image: `${assetBase}/watering-nozzles.webp`,
    summary: "Brass twist nozzles, spray nozzles and in-line flow-control solutions.",
    features: ["Adjustable flow", "Brass options", "Ergonomic control", "Standard hose compatibility"],
    applications: ["Hand watering", "Cleaning", "Greenhouses", "Garden maintenance"],
  },
  {
    slug: "stainless-garden-hand-tools",
    name: "Stainless Garden Hand Tools",
    code: "LH-GHT Series",
    category: "Garden Hand Tools",
    image: `${assetBase}/garden-hand-tools.webp`,
    summary: "Trowels, cultivators, weeders and forks with wood or non-slip handles.",
    features: ["Stainless steel heads", "Wood / TPR handles", "Hanging loops", "Logo customization"],
    applications: ["Planting", "Weeding", "Transplanting", "Soil cultivation"],
  },
  {
    slug: "garden-tool-kits",
    name: "Garden Tool Kits",
    code: "LH-GTK Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/garden-tool-kits.webp`,
    summary: "Configurable 3-piece to multi-piece garden sets for retail and promotional programs.",
    features: ["Flexible assortments", "Gloves and sprayer options", "Color customization", "Gift / mailer packaging"],
    applications: ["Retail programs", "E-commerce", "Seasonal gifts", "Private labels"],
  },
  {
    slug: "pruning-shears",
    name: "Pruning Shears",
    code: "LH-PRS Series",
    category: "Garden Hand Tools",
    image: `${assetBase}/pruning-tools.webp`,
    summary: "Bypass and straight-blade shears for flowers, shrubs and general garden care.",
    features: ["Multiple blade styles", "Comfort-grip handles", "Safety locks", "Custom colorways"],
    applications: ["Flowers", "Shrubs", "Bonsai", "Harvesting"],
  },
  {
    slug: "garden-tool-bags",
    name: "Garden Tool Bags",
    code: "LH-BAG Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/tool-bags.webp`,
    summary: "Canvas and Oxford-fabric organizers for complete garden tool programs.",
    features: ["Multiple outer pockets", "Reinforced handles", "Custom fabrics", "Logo and label options"],
    applications: ["Tool storage", "Garden kits", "Gift sets", "Retail bundles"],
  },
  {
    slug: "bonsai-kids-garden-kits",
    name: "Bonsai & Kids Garden Kits",
    code: "LH-SPE Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/bonsai-kits.webp`,
    summary: "Purpose-built assortments for bonsai beginners, family gardening and educational programs.",
    features: ["Age-appropriate options", "Custom assortment", "Storage cases", "Private-label packaging"],
    applications: ["Bonsai care", "Family gardening", "Education", "Seasonal gifting"],
  },
  {
    slug: "brass-four-way-hose-splitters",
    name: "Brass 4-Way Hose Splitters",
    code: "LH-4WS Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/hose-splitters.webp`,
    summary: "Four-outlet brass manifolds for garden taps, greenhouse zones and irrigation layouts.",
    features: ["Four outlet configurations", "Independent flow control", "Brass body options", "OEM packaging"],
    applications: ["Multi-zone watering", "Garden taps", "Greenhouses", "Irrigation lines"],
  },
  {
    slug: "brass-shut-off-valves",
    name: "Brass Shut-Off Valves",
    code: "LH-SOV Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/watering-nozzles.webp`,
    summary: "In-line brass valves for convenient water-flow control at the hose end.",
    features: ["Brass construction", "Hand-operated control", "Standard hose compatibility", "OEM packaging"],
    applications: ["Hose ends", "Sprinklers", "Nozzles", "Irrigation maintenance"],
  },
  {
    slug: "brass-twist-hose-nozzles",
    name: "Brass Twist Hose Nozzles",
    code: "LH-TWN Series",
    category: "Watering & Irrigation",
    image: `${assetBase}/watering-nozzles.webp`,
    summary: "Adjustable twist-pattern hose nozzles for watering, rinsing and garden care.",
    features: ["Adjustable spray pattern", "Brass nozzle options", "Hose-end use", "OEM packaging"],
    applications: ["Hand watering", "Cleaning", "Greenhouses", "Garden maintenance"],
  },
  ...brassConnectorModels,
];
