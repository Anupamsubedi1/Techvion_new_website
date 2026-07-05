import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import { Check } from "lucide-react";
import { engagementModels } from "@/content/about";

export function EngagementModels({ tone = "white" }: { tone?: "white" | "surface" }) {
  return (
    <section className={tone === "surface" ? "bg-surface py-10 md:py-14" : "bg-white py-10 md:py-14"}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Ways to work together"
          title="Engagement models that fit your stage"
          description="Whether you need a defined build, an embedded team, or someone to keep a live product healthy, there's a clear way in."
          className="mb-14"
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((m) => (
            <RevealItem key={m.name}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                  <Icon name={m.icon} className="h-6 w-6 text-accent-bright" />
                </span>
                <p className="mt-5 label-mono text-accent-ink">{m.best}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedink">{m.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                      <Check className="h-4 w-4 shrink-0 text-accent-ink" />
                      {p}
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
