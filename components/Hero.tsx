import Link from "next/link";
import { business } from "@/data/business";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
            Based in {business.location}
          </p>

          <h1 className="mt-6 max-w-xl font-display text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]">
            One team looks after your building, day and night.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
            {business.name} provides security guarding and commercial
            cleaning for businesses across {business.serviceAreaLine} — a
            single point of contact for both.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact#quote"
              className="rounded-md bg-steel px-6 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-steel-light"
            >
              Request a quote
            </Link>
            <a
              href={business.phoneHref}
              className="rounded-md border border-ink/15 px-6 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/30"
            >
              Call {business.phoneDisplay}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-2 gap-y-5 border-t border-line pt-6 text-sm text-ink/65">
            <div>
              <dt className="text-ink/45">Services</dt>
              <dd className="mt-0.5 text-ink">Security &amp; cleaning</dd>
            </div>
            <div>
              <dt className="text-ink/45">Coverage</dt>
              <dd className="mt-0.5 text-ink">{business.location} &amp; nearby</dd>
            </div>
          </dl>
        </div>

        {/* Memorable element: an ID-badge / lanyard-pass shaped photo frame —
            the one deliberately bold device in this design, everything else
            stays quiet. Single load-in animation, respects reduced motion. */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="badge-enter relative mx-auto w-[280px] rotate-[-3deg] rounded-badge border border-line bg-white p-3 shadow-[0_20px_50px_-20px_rgba(20,24,27,0.25)] sm:w-[320px]">
            <div className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-paper ring-1 ring-inset ring-line" aria-hidden="true" />
            <ImagePlaceholder
              label="site officer on duty"
              className="aspect-[3/4] rounded-[1.35rem]"
            />
            <div className="mt-3 flex items-center justify-between px-1 pb-1">
              <span className="text-xs font-medium text-ink/60">
                {business.name}
              </span>
              <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[11px] font-medium text-amber-dark">
                On site
              </span>
            </div>
          </div>
          <div
            className="badge-enter-delay absolute -bottom-6 -left-4 w-40 rotate-[4deg] rounded-2xl border border-line bg-white p-2.5 shadow-[0_16px_40px_-18px_rgba(20,24,27,0.3)] sm:-left-8"
            aria-hidden="true"
          >
            <ImagePlaceholder label="cleaning team" className="aspect-square rounded-xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
