import { business } from "@/data/business";
import { Container } from "./Container";

const facts = [
  { label: "Specialisms", value: "Guarding, patrols, K9, events" },
  { label: "Cleaning cover", value: "Offices, retail, industrial, end of tenancy" },
  { label: "Contract", value: "One provider for both services" },
  { label: "Coverage", value: `${business.location} & surrounding areas` },
];

export function CapabilityStrip() {
  return (
    <section className="bg-steel text-paper">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="text-xs text-paper/50">{fact.label}</p>
            <p className="mt-1.5 text-[0.95rem] font-medium leading-snug text-paper">
              {fact.value}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
