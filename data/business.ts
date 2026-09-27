// Central business config. Replace placeholders with real client-confirmed
// details before launch — see README "Client Content & Assets Required".

export const business = {
  name: "Kinn Services",
  legalName: "Kinn Services Limited",
  tagline: "Security & Commercial Cleaning",
  location: "Manchester",
  serviceAreaLine: "Manchester and the surrounding areas",
  phoneDisplay: "[PHONE NUMBER]",
  phoneHref: "tel:[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  addressLine: "[BUSINESS ADDRESS]",
  companyNumber: "[COMPANY NUMBER]",
  siteUrl: "https://example.com", // replace with production domain
} as const;

export const serviceAreas: string[] = [
  // Confirm the real coverage area with the client before publishing —
  // do not invent additional towns for SEO reasons.
  "Manchester City Centre",
  "[AREA]",
  "[AREA]",
];
