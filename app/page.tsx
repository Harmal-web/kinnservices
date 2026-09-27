import { Hero } from "@/components/Hero";
import { CapabilityStrip } from "@/components/CapabilityStrip";
import { ServiceList } from "@/components/ServiceList";
import { ValuePillars } from "@/components/ValuePillars";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Testimonial } from "@/components/Testimonial";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { business } from "@/data/business";

export const metadata = pageMetadata({
  title: `${business.legalName} | ${business.tagline} in ${business.location}`,
  description: `Security guarding and commercial cleaning for businesses across ${business.serviceAreaLine} — one provider, one point of contact.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <ServiceList />
      <ValuePillars />
      <ProcessTimeline />
      <Testimonial />
      <CTASection />
    </>
  );
}
