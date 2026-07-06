import Image from "next/image";
import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
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
    <section
      id="team"
      className={`${tone === "surface" ? "bg-surface" : "bg-white"} scroll-mt-24 py-16 md:py-24`}
    >
      <Container>
        <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            The people behind the work
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
            A small, senior team that designs, builds and supports your product end to end.
          </p>
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <RevealItem key={m.name}>
              <figure className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-line bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-line transition-shadow duration-300 group-hover:ring-2 group-hover:ring-accent/40">
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
