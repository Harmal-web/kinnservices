import Link from "next/link";
import { business } from "@/data/business";
import { Container } from "./Container";

export function CTASection() {
  return (
    <section className="bg-amber">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Ready to discuss your premises?
          </h2>
          <p className="mt-3 text-ink/75">
            Tell us about your site and we&rsquo;ll come back with a clear,
            written proposal — no obligation.
          </p>
        </div>
        <div className="flex flex-none flex-wrap gap-3">
          <Link
            href="/contact#quote"
            className="rounded-md bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-steel"
          >
            Request a quote
          </Link>
          <a
            href={business.phoneHref}
            className="rounded-md border border-ink/25 px-6 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/50"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
