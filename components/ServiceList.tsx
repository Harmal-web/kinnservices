import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ServiceList() {
  const security = services.filter((s) => s.category === "security");
  const cleaning = services.filter((s) => s.category === "cleaning");

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="What we cover"
          lead="Two disciplines, run by one provider, so your building is looked after from every direction."
        />

        <div className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
          <ServiceColumn heading="Security" basePath="/security" items={security} />
          <ServiceColumn heading="Cleaning" basePath="/cleaning" items={cleaning} />
        </div>
      </Container>
    </section>
  );
}

function ServiceColumn({
  heading,
  basePath,
  items,
}: {
  heading: string;
  basePath: string;
  items: typeof services;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h3 className="font-display text-xl font-medium text-ink">{heading}</h3>
        <Link href={basePath} className="text-sm text-ink/55 hover:text-ink">
          View all
        </Link>
      </div>
      <ul>
        {items.map((service) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={`${basePath}#${service.slug}`}
              className="group flex items-start justify-between gap-6 py-5"
            >
              <div>
                <p className="font-medium text-ink">{service.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">
                  {service.summary}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-ink/50 transition-colors group-hover:border-amber group-hover:text-amber-dark"
              >
                +
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
