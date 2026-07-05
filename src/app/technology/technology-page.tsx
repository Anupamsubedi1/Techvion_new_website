import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiFlutter,
  SiApple,
  SiAndroid,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiGraphql,
  SiVercel,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { Cloud, Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { CTAButton } from "@/components/site/cta-button";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { Icon } from "@/components/site/icon";
import { principles, stackGroups, pillars } from "@/content/how-we-build";

const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  flutter: SiFlutter,
  apple: SiApple,
  android: SiAndroid,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  firebase: SiFirebase,
  cloudinary: SiCloudinary,
  graphql: SiGraphql,
  vercel: SiVercel,
  docker: SiDocker,
  github: SiGithub,
  aws: Cloud,
};

export function TechnologyPage() {
  return (
    <>
      <PageHero
        tone="night"
        eyebrow="How we build"
        title="Engineering you can build a business on"
        description="A modern, boring-on-purpose stack and a disciplined process, so what we ship is fast, secure, accessible and easy to maintain for years."
        actions={
          <>
            <CTAButton href="/contact" variant="accent" size="lg" arrow>
              Start a project
            </CTAButton>
            <CTAButton href="/projects" variant="glass" size="lg">
              See it in production
            </CTAButton>
          </>
        }
      />

      {/* Principles */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="The standards behind every build"
            description="These aren't slogans; they're constraints we hold ourselves to on every project."
            className="mb-14"
          />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{p.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Stack */}
      <section className="bg-surface py-10 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="The stack"
            title="Modern tools, chosen to last"
            description="We favour proven, well-supported technology over hype, so your product ages gracefully."
            className="mb-14"
          />
          <Stagger className="grid gap-5 md:grid-cols-2">
            {stackGroups.map((group) => (
              <RevealItem key={group.name}>
                <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-faint">{group.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => {
                      const BrandIcon = brandIcons[item.key] ?? Cloud;
                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-ink-200"
                        >
                          <BrandIcon className="h-4 w-4 text-accent-ink" />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="What makes a release safe"
            title="Six disciplines, on every project"
            description="Quality isn't a phase at the end; it's built into how we architect, test, ship and watch your product."
            className="mb-14"
          />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon name={pillar.icon} className="h-6 w-6 text-accent-bright" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{pillar.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-ink">
                        <Check className="h-4 w-4 shrink-0 text-accent-ink" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <ProcessTimeline tone="surface" />

      <CTASection
        title="Want this rigor on your product?"
        description="Whether it's a new build or an audit of something you already have, let's talk."
      />
    </>
  );
}
