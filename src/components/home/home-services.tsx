import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/layout";
import { Icon } from "@/components/site/icon";
import { serviceList } from "@/content/services";

/**
 * Home services — a premium, editorial two-column section.
 * Left: eyebrow + large headline + supporting copy + a single text CTA, with a
 * subtle geometric accent. Right: the service pillars as quiet "navigation
 * items" (number · icon · title · one-liner · arrow) separated by hairlines,
 * with a fast, restrained hover (teal accent bar + arrow motion). No cards,
 * no shadows, no entrance animation — Linear/Vercel-grade calm.
 *
 * Palette is intentionally set to the requested premium spec (charcoal text on
 * warm white, deep-teal accent, ultra-light borders).
 */
const blurbs: Record<string, string> = {
  "custom-software": "Software built around your workflows.",
  "web-ecommerce": "Sites and storefronts engineered to convert.",
  "digital-marketing": "Marketing accountable to measurable growth.",
  "data-science-ai": "Insights, predictions and intelligent automation.",
  "maintenance-support": "Keep your product fast, secure and online.",
};

export function HomeServices() {
  return (
    <section className="bg-[#F8F8F7] py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* Left — editorial column */}
          <div className="flex flex-col">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A7C86]">
                Our Services
              </span>
              <span className="mt-3 block h-px w-10 bg-[#0A7C86]/40" />
            </div>

            <h2 className="mt-8 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-[#0F1720] sm:text-5xl md:text-[3.25rem]">
              One team. Every layer of your product.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5B6673] md:text-base">
              Strategy, design, engineering, growth and AI, working as one, so your product
              stays coherent from the first wireframe to the final deploy and beyond.
            </p>

            <Link
              href="/services"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0A7C86]"
            >
              <span className="relative pb-1">
                View all services
                <span className="absolute bottom-0 left-0 h-px w-full bg-[#0A7C86]/40 transition-colors duration-300 group-hover:bg-[#0A7C86]" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>

            {/* Subtle geometric accent */}
            <div aria-hidden className="pointer-events-none mt-16 hidden lg:block">
              <svg width="248" height="150" viewBox="0 0 248 150" fill="none">
                <circle cx="8" cy="150" r="64" stroke="#E9ECEF" />
                <circle cx="8" cy="150" r="104" stroke="#E9ECEF" />
                <circle cx="8" cy="150" r="144" stroke="#E9ECEF" />
                <g fill="#0A7C86" fillOpacity="0.2">
                  {Array.from({ length: 7 }).map((_, r) =>
                    Array.from({ length: 8 }).map((_, c) => (
                      <circle key={`${r}-${c}`} cx={150 + c * 14} cy={18 + r * 14} r="1.6" />
                    )),
                  )}
                </g>
              </svg>
            </div>
          </div>

          {/* Right — service pillars as navigation items */}
          <div className="border-t border-[#E9ECEF]">
            {serviceList.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex items-center gap-4 border-b border-[#E9ECEF] py-6 transition-colors duration-300 hover:bg-[#0A7C86]/[0.02] sm:gap-6 sm:py-7"
              >
                {/* Hover accent line */}
                <span
                  aria-hidden
                  className="absolute -left-px top-0 h-full w-[2px] origin-top scale-y-0 bg-[#0A7C86] transition-transform duration-300 ease-out group-hover:scale-y-100"
                />

                <span className="w-7 shrink-0 pl-1 text-sm font-semibold tabular-nums text-[#0A7C86] sm:text-[15px]">
                  0{i + 1}
                </span>

                <span aria-hidden className="hidden h-10 w-px shrink-0 bg-[#E9ECEF] sm:block" />

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0A7C86]/[0.06] text-[#0A7C86] transition-colors duration-300 group-hover:bg-[#0A7C86]/[0.12]">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#0F1720] sm:text-xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5B6673]">
                    {blurbs[s.slug] ?? s.tagline}
                  </p>
                </div>

                <ArrowRight className="h-5 w-5 shrink-0 -translate-x-1 text-[#9AA5B1] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#0A7C86]" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
