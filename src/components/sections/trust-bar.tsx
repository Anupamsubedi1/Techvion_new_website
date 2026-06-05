import { Container } from "@/components/site/layout";

const clients = [
  "Big Sky Treks",
  "Himalaya Nepal Krishi Co.",
  "Mardi Treks",
  "QuickStay",
  "UnwindCabins",
  "Connectify",
  "HamroBike",
];

/** Client wordmark marquee: honest text logos, premium feel. */
export function TrustBar({ caption = "Trusted by teams building real products" }: { caption?: string }) {
  return (
    <section className="border-y border-line bg-white py-10">
      <Container className="flex flex-col items-center gap-7">
        <p className="label-mono text-faint">{caption}</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink/35 transition-colors hover:text-ink/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
