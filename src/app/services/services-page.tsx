import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { CTAButton } from "@/components/site/cta-button";
import { ServiceCard } from "@/components/sections/service-card";
import { EngagementModels } from "@/components/sections/engagement-models";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { Icon } from "@/components/site/icon";
import { serviceList, capabilities } from "@/content/services";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built to scale"
        description="From a first MVP to a production platform under load: end-to-end design, engineering and growth, delivered by one accountable team."
        actions={
          <>
            <CTAButton href="/contact" variant="primary" size="lg" arrow>
              Start a project
            </CTAButton>
            <CTAButton href="/projects" variant="outline" size="lg">
              See the work
            </CTAButton>
          </>
        }
      />

      {/* Service pillars */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {serviceList.map((s) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Full-stack capabilities */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="A full-stack team, end to end"
            description="Beyond the four pillars, here's the complete range we bring to a build, so you rarely need a second vendor."
            className="mb-14"
          />
          <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <RevealItem key={c.name}>
                <div className="flex h-full flex-col bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{c.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <ProcessTimeline tone="surface" />

      <EngagementModels />

      <CTASection
        title="Not sure which service you need?"
        description="Tell us the problem you're trying to solve. We'll recommend the right approach, even if it's not us."
        primary={{ label: "Get a recommendation", href: "/contact" }}
        secondary={{ label: "How we build", href: "/technology" }}
      />
    </>
  );
}
