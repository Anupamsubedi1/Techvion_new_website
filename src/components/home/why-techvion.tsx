import { Container, Eyebrow } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { Icon, type IconName } from "@/components/site/icon";

const differentiators: { icon: IconName; title: string; desc: string }[] = [
  { icon: "lock", title: "You own everything", desc: "Full source, docs and infrastructure. Zero lock-in, ever." },
  { icon: "gauge", title: "Fast by default", desc: "Performance budgets and Core Web Vitals baked into every build." },
  { icon: "eye", title: "Transparent always", desc: "Weekly updates, honest timelines, no surprise invoices." },
  { icon: "lifebuoy", title: "Here after launch", desc: "Monitoring, security and improvements; we don't disappear." },
];

export function WhyTechvion() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow>Why Techvion</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl md:text-[2.75rem]">
              Built different. Delivered better.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mutedink md:text-lg">
              We pair senior engineering with genuine product thinking, and back it with the
              kind of communication and care most agencies promise but few deliver.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CTAButton href="/about" variant="outline" arrow>
              More about us
            </CTAButton>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <RevealItem key={d.title}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedink">{d.desc}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
