import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import { Check } from "lucide-react";
import { engagementModels } from "@/content/about";

export function EngagementModels({ tone = "white" }: { tone?: "white" | "surface" }) {
  return (
    <section className={tone === "surface" ? "bg-surface py-16 md:py-24" : "bg-white py-16 md:py-24"}>
      <Container>
        <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Engagement models that fit your stage
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
            Whether you need a defined build, an embedded team, or someone to keep a live product
            healthy, there&apos;s a clear way in.
          </p>
        </Reveal>
        <Stagger className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((m) => (
            <RevealItem key={m.name}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent-bright shadow-soft">
                  <Icon name={m.icon} className="h-6 w-6" />
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
