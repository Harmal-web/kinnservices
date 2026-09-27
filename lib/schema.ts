import { business } from "@/data/business";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.siteUrl}/#business`,
    name: business.legalName,
    image: `${business.siteUrl}/images/og-image.jpg`,
    url: business.siteUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressLocality: business.location,
      addressCountry: "GB",
    },
    areaServed: business.serviceAreaLine,
    description: `${business.tagline} for businesses across ${business.serviceAreaLine}.`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.siteUrl}${item.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: business.legalName,
    },
    areaServed: business.serviceAreaLine,
    description,
  };
}
