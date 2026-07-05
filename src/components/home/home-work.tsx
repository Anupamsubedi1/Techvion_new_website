import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { ProjectCard } from "@/components/sections/project-card";
import { caseStudies } from "@/content/projects";

export function HomeWork() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl md:text-[2.75rem]">
              Real products, shipped and live
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mutedink md:text-lg">
              Every project below is in production today. Visit the live site and
              judge the quality for yourself.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CTAButton href="/projects" variant="outline" arrow>
              View all work
            </CTAButton>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} priority={i === 0} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
