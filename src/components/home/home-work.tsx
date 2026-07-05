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
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Live in production
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl md:text-[2.75rem]">
              Proof, not promises
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mutedink md:text-lg">
              Every project below is live in production right now, real products you can open,
              click through, and judge for yourself. No mockups, no demos.
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
