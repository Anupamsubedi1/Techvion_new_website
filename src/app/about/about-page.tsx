import { Container, SectionHeading } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { CTAButton } from "@/components/site/cta-button";
import { EngagementModels } from "@/components/sections/engagement-models";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { CTASection } from "@/components/sections/cta-section";
import { Icon } from "@/components/site/icon";
import { story, values, disciplines } from "@/content/about";
import { site } from "@/content/site";

const facts = [
  { label: "Founded", value: String(site.founded) },
  { label: "Experience", value: "2 years" },
  { label: "Projects shipped", value: "20+" },
  { label: "Way of working", value: "Remote-first" },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Techvion"
        title="A focused team, fully invested in your product"
        description="We turn complex, ambiguous requirements into reliable software that ships, and we stick around to help it grow."
        actions={
          <>
            <CTAButton href="/contact" variant="primary" size="lg" arrow>
              Work with us
            </CTAButton>
            <CTAButton href="/projects" variant="outline" size="lg">
              See our work
            </CTAButton>
          </>
        }
      />

      {/* Story */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-ink md:text-4xl">
                {story.title}
              </h2>
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 text-[15px] leading-relaxed text-mutedink md:text-base">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
                {facts.map((f) => (
                  <div key={f.label} className="bg-white p-7">
                    <div className="text-3xl font-semibold tracking-tight text-ink">{f.value}</div>
                    <div className="mt-1.5 text-sm text-faint">{f.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface py-10 md:py-14">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Principles we don't compromise on"
            className="mb-14"
          />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Disciplines / team */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-ink md:text-4xl">
                One cross-functional team, not a chain of hand-offs
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-mutedink md:text-base">
                Every engagement is staffed with the four disciplines below working side by side.
                No silos, no telephone game, just one team accountable for the outcome.
              </p>
              <div className="mt-7">
                <CTAButton href="#team" variant="outline" arrow>
                  Meet the team
                </CTAButton>
              </div>
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {disciplines.map((d) => (
                <RevealItem key={d.title}>
                  <div className="h-full rounded-3xl border border-line bg-surface p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon name={d.icon} className="h-5 w-5 text-accent-bright" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-ink">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mutedink">{d.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      <Team tone="surface" />

      <Testimonials limit={3} tone="light" />

      <EngagementModels />

      <CTASection
        title="Ready to work together?"
        description="Let's align on your goals and build something scalable, maintainable and ready to grow."
      />
    </>
  );
}
