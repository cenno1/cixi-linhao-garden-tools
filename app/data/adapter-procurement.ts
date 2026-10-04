import type { Product } from "./products";

// Both ends are transcribed from the owner-approved catalogue, not inferred
// from photographs. Application choices below require mating-part review.
const configurations = [
  { code: "LH-3902", pipe: '1/2" NPT male', task: "a female 1/2-inch NPT interface", compare: "LH-3903 uses a 3/4-inch NPT male end instead; choose from the actual female pipe interface, not the hose-side size." },
  { code: "LH-3903", pipe: '3/4" NPT male', task: "a female 3/4-inch NPT interface", compare: "LH-3902 reduces to a 1/2-inch NPT male end. LH-3906 has a 3/4-inch NPT female end, so connection gender is also a selection decision." },
  { code: "LH-3904", pipe: '1/2" NPS female', task: "a matching male 1/2-inch NPS interface", compare: "LH-3905 has a 1/2-inch NPT female end. NPS and NPT are different catalogue designations; do not substitute one solely because the nominal size is the same." },
  { code: "LH-3905", pipe: '1/2" NPT female', task: "a male 1/2-inch NPT interface", compare: "LH-3904 lists 1/2-inch NPS female instead. LH-3902 lists 1/2-inch NPT male. Confirm both the thread designation and gender." },
  { code: "LH-3906", pipe: '3/4" NPT female', task: "a male 3/4-inch NPT interface", compare: "LH-3905 has a smaller 1/2-inch NPT female end; LH-3903 has a 3/4-inch NPT male end. Match the mating component before choosing either alternative." },
];

export const adapterProcurementCopy: Record<string, Partial<Product>> = Object.fromEntries(
  configurations.map(({ code, pipe, task, compare }) => {
    const connection = `3/4" NH male × ${pipe}`;
    return [code, {
      indexable: true,
      updatedAt: "2026-10-04",
      name: `Aluminum 3/4" NH Male to ${pipe} Adapter`,
      seoTitle: `${code}: ${connection} Aluminum Adapter`,
      seoDescription: `${code} aluminum adapter: ${connection}. Compare mating thread size and gender, review the catalogue image, and send a drawing for an OEM quotation.`,
      summary: `Aluminum threaded adapter with ${connection}. Select this reference when a compatible NH-side connection must join ${task}.`,
      procurementIntro: `${code} is an aluminum threaded adapter supplied by Cixi Linhao Metal Product Co., Ltd. The catalogue specifies a 3/4-inch NH male end and a ${pipe} end. Buyers should define the matching female NH component and ${task}, then submit the assembly drawing for fit and sealing review.`,
      connectionEnds: [{ label: "NH-side end", specification: '3/4" NH male' }, { label: "Pipe-side end", specification: pipe }],
      selectionNote: compare,
      faqs: [
        { question: `What are the two connections on ${code}?`, answer: `The supplied catalogue specifies ${connection}, in aluminum. These are nominal thread descriptions, not measured dimensions or a universal compatibility guarantee.` },
        { question: `How does ${code} differ from adjacent adapter models?`, answer: compare },
        { question: "Does the NH description establish GHT compatibility?", answer: "Not by itself. The catalogue lists NH but does not give a dimensioned thread drawing or pitch for this model. Send the mating hose component or its thread specification; the required fit and sealing arrangement must be checked before ordering." },
        { question: "Which details are needed for a custom adapter quote?", answer: `Reference ${code} and provide both mating parts, required thread dimensions, aluminum alloy, body dimensions, finish, seal requirements, operating conditions, quantity and packaging. Pressure rating, lead time and MOQ are project-specific quotation fields, not published catalogue values.` },
      ],
      buyerGuide: {
        heading: `Specify the mating assembly for ${code}`,
        introduction: `Start with ${connection}, then confirm the features the catalogue does not define. A matching nominal size alone is not enough to approve an adapter.`,
        checklist: ["Identify both mating components and their male/female connections.", "Provide thread pitch, tolerances and the required sealing surfaces.", "Check body clearance, installation access and overall dimensions.", "Confirm alloy, finish, operating conditions and sample acceptance criteria."],
        guideHref: "/products/materials/aluminum",
        guideLabel: "Compare NH-to-NPT/NPS aluminum adapters",
        relatedLinks: [{ href: "/capabilities", label: "Review drawing-led manufacturing requirements" }],
      },
    } satisfies Partial<Product>];
  }),
);
