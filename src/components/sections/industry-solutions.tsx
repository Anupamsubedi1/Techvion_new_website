import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import { industrySolutions } from "@/content/industries";

/**
 * Industry-specific SaaS platforms grid. Each card leads with the industry,
 * a one-line pitch, and a checklist of what the platform ships with.
 */
export function IndustrySolutions() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <SectionHeading
          eyebrow="Industry solutions"
          title="SaaS platforms tailored to your industry"
          description="Ready-to-launch, fully customizable platforms built around how each business actually operates."
          className="mb-14"
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industrySolutions.map((ind) => (
            <RevealItem key={ind.name}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedink">{ind.description}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {ind.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
