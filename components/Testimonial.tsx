import { Container } from "./Container";

export function Testimonial() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="max-w-2xl">
        <p className="text-xs font-medium text-ink/40">
          Sample layout — replace with a genuine client testimonial.
        </p>
        <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
          “Having one provider for guarding and cleaning meant one phone
          call instead of two suppliers to chase.”
        </blockquote>
        <p className="mt-5 text-sm text-ink/55">
          [Client name], [Company] — quote to be replaced with real feedback
        </p>
      </Container>
    </section>
  );
}
