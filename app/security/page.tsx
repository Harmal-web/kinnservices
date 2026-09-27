import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { business } from "@/data/business";
import { services } from "@/data/services";

export const metadata = pageMetadata({
  title: `Security Services in ${business.location}`,
  description: `Static guarding, mobile patrols, K9 and event security for businesses across ${business.serviceAreaLine}.`,
  path: "/security",
});

export default function SecurityPage() {
  const items = services.filter((s) => s.category === "security");
  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Security", path: "/security" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <Container>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Security", href: "/security" }]} />
      </Container>

      <header className="border-b border-line bg-white">
        <Container className="py-14 sm:py-16">
          <p className="text-sm font-medium text-amber-dark">Security</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Security cover for buildings, sites and events
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink/70">
            Static guarding, mobile patrols, K9 teams and event security —
            delivered across {business.serviceAreaLine} with one named
            point of contact.
          </p>
        </Container>
      </header>

      <Container className="divide-y divide-line py-4">
        {items.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 grid gap-10 py-14 lg:grid-cols-2 lg:items-center sm:py-16"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-sm text-ink/45">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                {service.name}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink/70">
                {service.detail}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(serviceSchema(service.name, service.detail)),
                }}
              />
            </div>
            <ImagePlaceholder
              label={service.name.toLowerCase()}
              className={`aspect-[4/3] rounded-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}
            />
          </section>
        ))}
      </Container>

      <CTASection />
    </>
  );
}
