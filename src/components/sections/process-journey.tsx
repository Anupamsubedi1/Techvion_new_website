import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { journeySteps } from "@/content/process";

/**
 * Step-by-step engagement journey — a premium dark timeline band.
 * A single vertical rail with glowing numbered nodes and quiet content cards;
 * bold enough to anchor the page, restrained enough to stay on-brand.
 */
export function ProcessJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          align="center"
          onDark
          title="Our step-by-step process"
          description="Follow our streamlined process to get your project started — from first call to a product you're proud to launch."
          className="mb-14 md:mb-20"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical rail */}
          <div
            className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
            aria-hidden="true"
          />

          <Stagger className="flex flex-col gap-6 md:gap-8">
            {journeySteps.map((s) => (
              <RevealItem key={s.title} className="group relative flex items-start gap-5 sm:gap-8">
                {/* Glowing numbered node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-bright to-accent text-sm font-semibold text-night shadow-glow ring-[6px] ring-night">
                  {s.num}
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05] md:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-[15px]">
                    {s.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
