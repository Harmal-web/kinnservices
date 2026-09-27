import { processSteps } from "@/data/services";
import { business } from "@/data/business";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            title="How it works"
            lead="A clear process from first contact through to ongoing service."
          />
          <div className="mt-8 rounded-xl border border-line bg-white p-6">
            <p className="text-sm text-ink/55">Prefer to speak to someone?</p>
            <a
              href={business.phoneHref}
              className="mt-2 block font-display text-lg font-medium text-ink hover:text-steel"
            >
              {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="mt-1 block text-sm text-ink/60 hover:text-ink"
            >
              {business.email}
            </a>
          </div>
        </div>

        <ol className="relative border-l border-line pl-8">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+5px)] top-0.5 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-amber ring-4 ring-paper"
                aria-hidden="true"
              />
              <p className="text-xs text-ink/40">
                Step {index + 1} of {processSteps.length}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/65">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
