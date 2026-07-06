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
import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
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

/** Curated logos for the hero "built with" strip. */
const heroLogos: { key: string; name: string }[] = [
  { key: "nextjs", name: "Next.js" },
  { key: "react", name: "React" },
  { key: "typescript", name: "TypeScript" },
  { key: "node", name: "Node.js" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "flutter", name: "Flutter" },
  { key: "vercel", name: "Vercel" },
  { key: "docker", name: "Docker" },
];

/** Centered, editorial section header. */
function CenterHeader({ title, description }: { title: string; description?: string }) {
  return (
    <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export function TechnologyPage() {
  return (
    <>
      <PageHero
        tone="night"
        eyebrow="How we build"
        title={
          <>
            Engineering you can <span className="text-gradient-accent">build a business on</span>
          </>
        }
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
      >
        <Reveal delay={0.15} className="mt-14 border-t border-white/10 pt-8">
          <span className="label-mono text-white/40">Built with</span>
          <div className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-5">
            {heroLogos.map(({ key, name }) => {
              const BrandIcon = brandIcons[key] ?? Cloud;
              return (
                <span key={key} aria-label={name} title={name} className="group">
                  <BrandIcon className="h-7 w-7 text-white/50 transition-colors duration-200 group-hover:text-white" />
                </span>
              );
            })}
          </div>
        </Reveal>
      </PageHero>

      {/* Principles */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
                Non-negotiables
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-mutedink md:text-lg">
                These aren&apos;t slogans; they&apos;re constraints we hold ourselves to on every
                project, from the first commit to long after launch.
              </p>
            </Reveal>

            <Stagger className="grid gap-5 sm:grid-cols-2">
              {principles.map((p) => (
                <RevealItem key={p.title}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-accent-bright">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{p.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <CenterHeader
            title="Modern tools, chosen to last"
            description="We favour proven, well-supported technology over hype, so your product ages gracefully."
          />
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div className="divide-y divide-line">
                {stackGroups.map((group) => (
                  <div
                    key={group.name}
                    className="grid gap-5 p-6 md:grid-cols-[200px_1fr] md:gap-8 md:p-8"
                  >
                    <div className="label-mono pt-1 text-faint">{group.name}</div>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => {
                        const BrandIcon = brandIcons[item.key] ?? Cloud;
                        return (
                          <span
                            key={item.name}
                            className="group inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-soft motion-reduce:transform-none"
                          >
                            <BrandIcon className="h-5 w-5 text-mutedink transition-colors duration-200 group-hover:text-accent-ink" />
                            {item.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pillars: dark glass band */}
      <section className="relative isolate overflow-hidden bg-night py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-[-15%] top-[-30%] h-[400px] w-[560px] rounded-full bg-accent/15 blur-[130px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Six disciplines, on every project
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Quality isn&apos;t a phase at the end; it&apos;s built into how we architect, test,
              ship and watch your product.
            </p>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:bg-white/[0.07] motion-reduce:transform-none">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-bright">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{pillar.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Check className="h-4 w-4 shrink-0 text-accent-bright" />
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
