export type Service = {
  slug: string;
  category: "security" | "cleaning";
  name: string;
  summary: string;
  detail: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "static-guarding",
    category: "security",
    name: "Static Guarding",
    summary: "A visible, on-site security presence for your premises.",
    detail:
      "On-site officers providing a consistent presence and controlled access, suited to commercial buildings, construction sites and retail premises.",
    bullets: [
      "Visible on-site presence",
      "Access control support",
      "Commercial & construction sites",
      "Clear reporting after every shift",
    ],
  },
  {
    slug: "mobile-patrols",
    category: "security",
    name: "Mobile Patrols",
    summary: "Scheduled vehicle and foot patrols across multiple sites.",
    detail:
      "Regular patrols that check multiple sites, respond to alarm activations, and provide a documented record of every visit.",
    bullets: [
      "Multi-site coverage",
      "Alarm response",
      "Logged visit reports",
      "Flexible patrol frequency",
    ],
  },
  {
    slug: "k9-security",
    category: "security",
    name: "K9 Security",
    summary: "Handler-led dog teams for detection and deterrence.",
    detail:
      "Specialist dog-handler teams providing an additional layer of deterrence for sites that need it, deployed alongside static or patrol cover.",
    bullets: [
      "Trained handler teams",
      "Deterrence & detection",
      "Suited to high-risk sites",
      "Deployed alongside other cover",
    ],
  },
  {
    slug: "event-security",
    category: "security",
    name: "Event Security",
    summary: "Crowd management and access control for events.",
    detail:
      "Security support for events of varying size, covering entry management, crowd safety and on-site incident response.",
    bullets: [
      "Crowd management",
      "Access & ticket control",
      "On-site incident response",
      "Scaled to event size",
    ],
  },
  {
    slug: "office-cleaning",
    category: "cleaning",
    name: "Office Cleaning",
    summary: "Scheduled cleaning programmes for offices and workspaces.",
    detail:
      "Desk areas, meeting rooms, kitchens, washrooms and common areas kept to a consistent standard on a schedule built around your hours.",
    bullets: [
      "Daily, weekly or tailored schedules",
      "Offices & professional workspaces",
      "Kitchens, washrooms & common areas",
      "Timed around your operating hours",
    ],
  },
  {
    slug: "retail-showrooms",
    category: "cleaning",
    name: "Retail & Showrooms",
    summary: "Cleaning built around customer-facing floors and displays.",
    detail:
      "Cleaning tailored to retail floors, display areas and customer-facing spaces, scheduled to avoid trading hours where needed.",
    bullets: [
      "Sales floor & display care",
      "Scheduled around trading hours",
      "Customer-facing standard",
      "Consistent, repeatable results",
    ],
  },
  {
    slug: "industrial-warehouse",
    category: "cleaning",
    name: "Industrial & Warehouse",
    summary: "Cleaning for industrial units and operational facilities.",
    detail:
      "Cleaning for warehouses and industrial units, planned around shift patterns so it never interrupts operations.",
    bullets: [
      "Planned around shift patterns",
      "Warehouses & industrial units",
      "Operational-safety aware",
      "Scalable to site size",
    ],
  },
  {
    slug: "deep-cleans",
    category: "cleaning",
    name: "Deep Cleans & End of Tenancy",
    summary: "One-off resets for handovers and move-outs.",
    detail:
      "Thorough one-off cleans for handovers, move-outs and properties that need a full reset before the next occupant or inspection.",
    bullets: [
      "Handover & move-out ready",
      "One-off, full-site reset",
      "Suited to inspections",
      "Booked around your timeline",
    ],
  },
];

export const processSteps = [
  {
    title: "Tell us what you need",
    detail:
      "Share the location, the type of premises, and whether you need security, cleaning, or both.",
  },
  {
    title: "Discuss the detail",
    detail:
      "We talk through access, hours, areas to cover, and any specific requirements for the site.",
  },
  {
    title: "Receive a clear proposal",
    detail:
      "A straightforward written proposal, so you can see exactly what's included before deciding.",
  },
  {
    title: "Service delivery",
    detail:
      "Once agreed, we deliver the service with a named point of contact and clear reporting throughout.",
  },
];

export const valuePillars = [
  {
    title: "Local to Manchester",
    detail: "A Manchester-based team covering the city and surrounding areas.",
  },
  {
    title: "One point of contact",
    detail: "Direct contact and honest updates, from first call to ongoing service.",
  },
  {
    title: "Security and cleaning",
    detail: "Two essential services from a single provider — simpler to arrange and manage.",
  },
  {
    title: "Scheduled around you",
    detail: "Cover and cleaning planned around your operating hours, not the reverse.",
  },
];
