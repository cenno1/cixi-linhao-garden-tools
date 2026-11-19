// Existing public company details, shared by visible attribution and structured data.
export const company = {
  name: "Cixi Linhao Metal Product Co., Ltd.",
  brandName: "CIXI LINHAO",
  url: "https://linhaogarden.com",
  organizationId: "https://linhaogarden.com/#organization",
  aboutUrl: "https://linhaogarden.com/about",
  logo: "https://linhaogarden.com/images/cixi-linhao-logo.png",
} as const;

export const companyOrganization = {
  "@type": "Organization",
  "@id": company.organizationId,
  name: company.name,
  alternateName: company.brandName,
  url: company.url,
  logo: company.logo,
  email: "info@lh-industrial.com",
  telephone: "+86-150-8845-2259",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cixi",
    addressRegion: "Zhejiang",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+86-150-8845-2259",
    email: "info@lh-industrial.com",
    availableLanguage: ["English", "Chinese"],
  },
} as const;
