import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
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
  { label: "Experience", value: "2 yrs" },
  { label: "Projects shipped", value: "20+" },
  { label: "Way of working", value: "Remote" },
];

export function AboutPage() {
  return (
    <>
      {/* ---------- Cinematic night hero with stat tiles ---------- */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-25%] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
          aria-hidden="true"
        />
        <Container className="relative pb-20 pt-32 md:pb-24 md:pt-40">
          <Reveal className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl">
              A focused team, fully invested in{" "}
              <span className="text-gradient-accent">your product</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              We turn complex, ambiguous requirements into reliable software that ships, and we
              stick around to help it grow.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" variant="accent" size="lg" arrow>
                Work with us
              </CTAButton>
              <CTAButton href="/projects" variant="glass" size="lg">
                See our work
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="text-gradient-accent text-3xl font-semibold tracking-tight md:text-4xl">
                  {f.value}
                </div>
                <div className="mt-1.5 text-sm text-white/50">{f.label}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------- Story: sticky editorial split ---------- */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
                {story.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              {story.paragraphs.map((p, i) => (
                <p
                  key={p.slice(0, 20)}
                  className={
                    i === 0
                      ? "text-pretty text-lg font-medium leading-relaxed text-ink md:text-xl"
                      : "mt-6 text-pretty text-base leading-relaxed text-mutedink"
                  }
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Values: dark glass band ---------- */}
      <section className="relative isolate overflow-hidden bg-night py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
        <div
          className="pointer-events-none absolute right-[-15%] top-[-30%] h-[400px] w-[560px] rounded-full bg-accent/15 blur-[130px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Principles we don&apos;t compromise on
            </h2>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:bg-white/[0.07] motion-reduce:transform-none">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- Disciplines: numbered editorial rows ---------- */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
                One cross-functional team, not a chain of hand-offs
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <CTAButton href="#team" variant="outline" arrow>
                Meet the team
              </CTAButton>
            </Reveal>
          </div>

          <Stagger className="border-t border-line">
            {disciplines.map((d, i) => (
              <RevealItem key={d.title}>
                <div className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-[5rem_3rem_1fr_1.4fr] md:items-center md:gap-8 md:py-10">
                  <span className="label-mono text-accent-ink">0{i + 1}</span>
                  <span className="hidden h-11 w-11 items-center justify-center rounded-xl bg-ink text-accent-bright md:flex">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mutedink md:text-base">{d.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <Team tone="surface" />

      <Testimonials limit={3} tone="light" />

      <EngagementModels tone="surface" />

      <CTASection
        title="Ready to work together?"
        description="Let's align on your goals and build something scalable, maintainable and ready to grow."
      />
    </>
  );
}
