import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ValuePillars } from "@/components/ValuePillars";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { business } from "@/data/business";

export const metadata = pageMetadata({
  title: "About Us",
  description: `About ${business.legalName}, a Manchester-based security and commercial cleaning provider.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Container>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      </Container>

      <Container className="grid gap-12 py-10 sm:py-14 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            A straightforward partner for your premises
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink/70">
            {business.name} brings security guarding and commercial
            cleaning together under one provider. It means one conversation
            instead of two suppliers, and one point of contact who
            understands your site.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink/70">
            [Add a short, honest paragraph here on how the company started,
            who runs it, and what they believe good site cover looks like —
            replace this placeholder with the client&rsquo;s own words.]
          </p>
        </div>
        <ImagePlaceholder label="team on site" className="aspect-[4/3] rounded-2xl" />
      </Container>

      <ValuePillars />
      <CTASection />
    </>
  );
}
