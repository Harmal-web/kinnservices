import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { business, serviceAreas } from "@/data/business";

export const metadata = pageMetadata({
  title: "Areas We Cover",
  description: `Security and commercial cleaning coverage across ${business.serviceAreaLine}.`,
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <Container>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }]} />
      </Container>

      <Container className="py-10 sm:py-14">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Areas we cover
        </h1>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink/70">
          {business.name} covers {business.serviceAreaLine}. Confirm the
          full list of towns and postcodes with the client before this page
          goes live — don&rsquo;t add coverage areas for SEO reasons alone.
        </p>

        <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink/80"
            >
              {area}
            </li>
          ))}
        </ul>
      </Container>

      <CTASection />
    </>
  );
}
