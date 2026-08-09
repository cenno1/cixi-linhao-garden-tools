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

export const products: Product[] = [
  {
    slug: "brass-quick-connectors",
    name: "Brass Quick Connectors",
    code: "CL-BHC Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/brass-connectors.webp`,
    summary: "Quick-connect and water-stop configurations for common garden hose systems.",
    features: ["Brass body", "EU / US thread options", "Water-stop option", "OEM packaging"],
    applications: ["Garden hoses", "Nozzles", "Sprinklers", "Hose repair"],
  },
  {
    slug: "multi-way-hose-splitters",
    name: "Multi-Way Hose Splitters",
    code: "CL-BSP Series",
    category: "Brass Fittings & Valves",
    image: `${assetBase}/hose-splitters.webp`,
    summary: "Two-way and four-way brass manifolds with independent flow control.",
    features: ["2-way / 4-way options", "Independent shut-off", "Heavy-duty brass", "Custom handle colors"],
    applications: ["Multi-zone watering", "Garden taps", "Greenhouses", "Irrigation lines"],
  },
  {
    slug: "metal-garden-sprinklers",
    name: "Metal Garden Sprinklers",
    code: "CL-SPR Series",
    category: "Watering & Irrigation",
    image: `${assetBase}/sprinklers.webp`,
    summary: "Rotary, impact and tripod sprinkler options for lawns and garden areas.",
    features: ["Multiple spray patterns", "Metal construction", "Adjustable coverage", "Retail-ready sets"],
    applications: ["Lawns", "Nurseries", "Vegetable gardens", "Landscape watering"],
  },
  {
    slug: "watering-nozzles-valves",
    name: "Watering Nozzles & Shut-Off Valves",
    code: "CL-NOZ Series",
    category: "Watering & Irrigation",
    image: `${assetBase}/watering-nozzles.webp`,
    summary: "Brass twist nozzles, spray nozzles and in-line flow-control solutions.",
    features: ["Adjustable flow", "Brass options", "Ergonomic control", "Standard hose compatibility"],
    applications: ["Hand watering", "Cleaning", "Greenhouses", "Garden maintenance"],
  },
  {
    slug: "stainless-garden-hand-tools",
    name: "Stainless Garden Hand Tools",
    code: "CL-GHT Series",
    category: "Garden Hand Tools",
    image: `${assetBase}/garden-hand-tools.webp`,
    summary: "Trowels, cultivators, weeders and forks with wood or non-slip handles.",
    features: ["Stainless steel heads", "Wood / TPR handles", "Hanging loops", "Logo customization"],
    applications: ["Planting", "Weeding", "Transplanting", "Soil cultivation"],
  },
  {
    slug: "garden-tool-kits",
    name: "Garden Tool Kits",
    code: "CL-GTK Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/garden-tool-kits.webp`,
    summary: "Configurable 3-piece to multi-piece garden sets for retail and promotional programs.",
    features: ["Flexible assortments", "Gloves and sprayer options", "Color customization", "Gift / mailer packaging"],
    applications: ["Retail programs", "E-commerce", "Seasonal gifts", "Private labels"],
  },
  {
    slug: "pruning-shears",
    name: "Pruning Shears",
    code: "CL-PRS Series",
    category: "Garden Hand Tools",
    image: `${assetBase}/pruning-tools.webp`,
    summary: "Bypass and straight-blade shears for flowers, shrubs and general garden care.",
    features: ["Multiple blade styles", "Comfort-grip handles", "Safety locks", "Custom colorways"],
    applications: ["Flowers", "Shrubs", "Bonsai", "Harvesting"],
  },
  {
    slug: "garden-tool-bags",
    name: "Garden Tool Bags",
    code: "CL-BAG Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/tool-bags.webp`,
    summary: "Canvas and Oxford-fabric organizers for complete garden tool programs.",
    features: ["Multiple outer pockets", "Reinforced handles", "Custom fabrics", "Logo and label options"],
    applications: ["Tool storage", "Garden kits", "Gift sets", "Retail bundles"],
  },
  {
    slug: "bonsai-kids-garden-kits",
    name: "Bonsai & Kids Garden Kits",
    code: "CL-SPE Series",
    category: "Tool Kits & Accessories",
    image: `${assetBase}/bonsai-kits.webp`,
    summary: "Purpose-built assortments for bonsai beginners, family gardening and educational programs.",
    features: ["Age-appropriate options", "Custom assortment", "Storage cases", "Private-label packaging"],
    applications: ["Bonsai care", "Family gardening", "Education", "Seasonal gifting"],
  },
];
