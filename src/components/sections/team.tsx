import Image from "next/image";
import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { team } from "@/content/about";

/** DiceBear illustration URL for a given seed (deterministic, brand-tinted). */
function avatarUrl(seed: string) {
  const params = new URLSearchParams({
    seed,
    radius: "50",
    backgroundColor: "d1f0f5,e1f5f8,eef4f6",
    backgroundType: "gradientLinear",
  });
  return `https://api.dicebear.com/9.x/notionists/png?${params.toString()}`;
}

export function Team({ tone = "white" }: { tone?: "white" | "surface" }) {
  return (
    <section id="team" className={`${tone === "surface" ? "bg-surface" : "bg-white"} scroll-mt-24 py-10 md:py-14`}>
      <Container>
        <SectionHeading
          eyebrow="The team"
          title="The people behind the work"
          description="A small, senior team that designs, builds and supports your product end to end."
          className="mb-14"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <RevealItem key={m.name}>
              <figure className="group flex h-full flex-col items-center rounded-3xl border border-line bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-line">
                  <Image
                    src={avatarUrl(m.seed)}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="96px"
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="text-base font-semibold text-ink">{m.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-ink">{m.role}</p>
                </figcaption>
                <p className="mt-3 text-sm leading-relaxed text-mutedink">{m.bio}</p>
              </figure>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
