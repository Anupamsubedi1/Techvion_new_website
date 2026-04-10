import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProcessSection } from "@/components/home/process-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FinalCTA } from "@/components/home/final-cta";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <ProcessSection />
      <MetricsSection />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}
