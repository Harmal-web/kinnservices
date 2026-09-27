import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { pageMetadata } from "@/lib/metadata";
import { business } from "@/data/business";

export const metadata = pageMetadata({
  title: "Contact & Get a Quote",
  description: `Get in touch with ${business.legalName} for security and commercial cleaning cover in ${business.serviceAreaLine}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Container>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      </Container>

      <Container className="grid gap-14 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-ink/70">
            Tell us about your site and we&rsquo;ll come back with a clear
            proposal — no obligation.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-ink/45">Call</dt>
              <dd className="mt-0.5">
                <a href={business.phoneHref} className="font-medium text-ink hover:text-steel">
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">Email</dt>
              <dd className="mt-0.5">
                <a href={`mailto:${business.email}`} className="font-medium text-ink hover:text-steel">
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">Registered office</dt>
              <dd className="mt-0.5 font-medium text-ink">{business.addressLine}</dd>
            </div>
          </dl>
        </div>

        <div id="quote" className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-medium text-ink">
            Request a quote
          </h2>
          <p className="mt-1.5 text-sm text-ink/60">
            Fields marked * are required.
          </p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>
      </Container>
    </>
  );
}
