import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HomeServices } from "@/components/home/home-services";
import { HomeWork } from "@/components/home/home-work";
import { WhyTechvion } from "@/components/home/why-techvion";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HomeServices />
      <HomeWork />
      <WhyTechvion />
      <ProcessTimeline />
      <Metrics />
      <Testimonials limit={3} tone="surface" />
      <CTASection />
    </>
  );
}
