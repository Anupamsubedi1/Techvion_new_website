import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import { processSteps } from "@/content/process";

export function ProcessTimeline({ tone = "light" }: { tone?: "light" | "surface" }) {
  return (
    <section className={tone === "surface" ? "bg-surface py-10 md:py-14" : "bg-white py-10 md:py-14"}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="A process built for momentum"
          description="From first call to live product and beyond: structured, transparent, and designed to keep things moving."
          className="mb-16"
        />
        <Stagger className="relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting line on desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((s) => (
            <RevealItem key={s.title} className="relative flex flex-col">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white shadow-soft">
                <Icon name={s.icon} className="h-6 w-6 text-accent-ink" />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{s.desc}</p>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
