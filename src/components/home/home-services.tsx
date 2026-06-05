import { Container, Eyebrow } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { ServiceCard } from "@/components/sections/service-card";
import { serviceList } from "@/content/services";

export function HomeServices() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl md:text-[2.75rem]">
              Four ways we move your product forward
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mutedink md:text-lg">
              One team across strategy, design and engineering, so the work stays coherent from
              the first wireframe to the final deploy.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CTAButton href="/services" variant="outline" arrow>
              View all services
            </CTAButton>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {serviceList.map((s) => (
            <RevealItem key={s.slug}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
