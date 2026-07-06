import { Container } from "@/components/site/layout";
import { cn } from "@/lib/utils";

/**
 * Client roster for the trust marquee (Stripe-style logo + name lockups).
 * `logo` points at a file in /public/logo; clients without one fall back to a
 * clean text wordmark. `big` gives emblem-style marks extra height. `showName`
 * prints the client name beside the logo (for icon logos that aren't wordmarks).
 * `parts` renders the wordmark as coloured segments (falls back to `name`).
 */
const clients: {
  name: string;
  logo?: string;
  imgClass?: string;
  showName?: boolean;
  parts?: { text: string; color?: string }[];
}[] = [
  {
    name: "Big Sky Treks",
    logo: "/logo/big_sky_treks.png",
    imgClass: "h-16 max-w-[13rem] md:h-20",
    showName: true,
    parts: [{ text: "Big Sky", color: "#3C5A9C" }, { text: " Treks" }],
  },
  // Wide horizontal wordmark: needs width, not height, and no separate name.
  { name: "Himalaya Nepal Krishi Co.", logo: "/logo/himalaya_agro_nepal.png", imgClass: "h-14 max-w-[20rem] md:h-16" },
  { name: "Mardi Treks", logo: "/logo/mardi_treks.png", imgClass: "h-16 max-w-[13rem] md:h-20", showName: true },
  { name: "QuickStay", logo: "/logo/quickstay.png", imgClass: "h-12 max-w-[12rem] md:h-14" },
  { name: "Kapadaa", logo: "/logo/kapadaa.png", imgClass: "h-12 max-w-[12rem] md:h-14" },
  { name: "CBRS Nepal", logo: "/logo/cbrs.png", imgClass: "h-16 max-w-[13rem] md:h-20", showName: true },
  { name: "UnwindCabins", parts: [{ text: "Unwind", color: "#166543" }, { text: "Cabins" }] },
  // Wide horizontal wordmarks (icon + brand baked in): logo only, no name.
  { name: "Connectify", logo: "/logo/connectifylogo.png", imgClass: "h-14 max-w-[15rem] md:h-16" },
  { name: "HamroBike", logo: "/logo/HamroBikelogo.png", imgClass: "h-14 max-w-[18rem] md:h-16" },
];

/**
 * Client marquee: full-colour logo + name lockups, no boxes, no heading.
 * The band is white to match the logos' own white/transparent backgrounds so
 * no logo shows as a differently-tinted tile.
 */
export function TrustBar() {
  return (
    <section className="border-y border-line bg-white py-6 md:py-8">
      <Container>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused] md:gap-10 md:pr-10">
            {[...clients, ...clients].map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex shrink-0 items-center gap-3">
                {c.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className={cn("w-auto object-contain", c.imgClass ?? "h-12 max-w-[11rem] md:h-14")}
                  />
                )}
                {(!c.logo || c.showName) && (
                  <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink md:text-xl">
                    {c.parts
                      ? c.parts.map((p, j) => (
                          <span key={j} style={p.color ? { color: p.color } : undefined}>
                            {p.text}
                          </span>
                        ))
                      : c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
