import { valuePillars } from "@/data/services";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ValuePillars() {
  return (
    <section className="border-y border-line bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Why businesses choose Kinn"
          lead="No jargon and no runaround — just clear cover for your premises."
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar, index) => (
            <div key={pillar.title} className="border-t border-ink/15 pt-5">
              <p className="text-sm text-ink/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
