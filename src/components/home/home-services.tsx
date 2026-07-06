"use client";

import { useEffect, useRef, type ForwardRefExoticComponent, type RefAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import {
  CodeXmlIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
  BrainIcon,
  SettingsIcon,
} from "@animateicons/react/lucide";
import type { IconHandle } from "@animateicons/react";
import { Container } from "@/components/site/layout";
import { serviceList } from "@/content/services";

/**
 * Home services: a premium, editorial two-column section.
 * Left: large headline + supporting copy + a subtle geometric accent.
 * Right: the service pillars as quiet navigation items with animated icons
 * (dark-navy tile + luminous cyan mark, per brand). Icons play once on scroll
 * and again on hover; the tile deepens to night on hover.
 */
type AnimatedIcon = ForwardRefExoticComponent<
  { size?: number; duration?: number; isAnimated?: boolean; color?: string; className?: string } & RefAttributes<IconHandle>
>;

const animatedIcons: Record<string, AnimatedIcon> = {
  "custom-software": CodeXmlIcon,
  "web-ecommerce": ShoppingBagIcon,
  "digital-marketing": TrendingUpIcon,
  "data-science-ai": BrainIcon,
  "maintenance-support": SettingsIcon,
};

const blurbs: Record<string, string> = {
  "custom-software": "Software built around your workflows.",
  "web-ecommerce": "Sites and storefronts engineered to convert.",
  "digital-marketing": "Marketing accountable to measurable growth.",
  "data-science-ai": "Insights, predictions and intelligent automation.",
  "maintenance-support": "Keep your product fast, secure and online.",
};

function ServiceRow({
  slug,
  name,
  blurb,
  Icon,
  index,
}: {
  slug: string;
  name: string;
  blurb: string;
  Icon: AnimatedIcon;
  index: number;
}) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<IconHandle>(null);
  const inView = useInView(rowRef, { once: true, amount: 0.6 });

  // Play the icon animation once as each row scrolls in (staggered).
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => iconRef.current?.startAnimation(), 180 + index * 140);
    return () => clearTimeout(t);
  }, [inView, index]);

  return (
    <Link
      ref={rowRef}
      href={`/services/${slug}`}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="group relative flex items-center gap-4 border-b border-[#E9ECEF] py-6 pl-1 transition-colors duration-300 hover:bg-[#0A7C86]/[0.02] sm:gap-6 sm:py-7"
    >
      {/* Hover accent line */}
      <span
        aria-hidden
        className="absolute -left-px top-0 h-full w-[2px] origin-top scale-y-0 bg-[#0A7C86] transition-transform duration-300 ease-out group-hover:scale-y-100"
      />

      {/* Dark tile + luminous cyan mark (brand icon lockup) */}
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-accent-bright shadow-soft transition-colors duration-300 group-hover:bg-night">
        <Icon ref={iconRef} size={22} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#0F1720] sm:text-xl">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[#5B6673]">{blurb}</p>
      </div>

      <ArrowRight className="h-5 w-5 shrink-0 -translate-x-1 text-[#9AA5B1] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#0A7C86]" />
    </Link>
  );
}

export function HomeServices() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#F8F8F7] py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* Left: editorial column */}
          <div className="flex flex-col">
            <h2 className="text-balance text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-[#0F1720] sm:text-5xl md:text-[3.25rem]">
              One team. Every layer of your product.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5B6673] md:text-base">
              Strategy, design, engineering, growth and AI, working as one, so your product
              stays coherent from the first wireframe to the final deploy and beyond.
            </p>

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

          {/* Right: service pillars as navigation items */}
          <div className="border-t border-[#E9ECEF]">
            {serviceList.map((s, i) => (
              <ServiceRow
                key={s.slug}
                slug={s.slug}
                name={s.name}
                blurb={blurbs[s.slug] ?? s.tagline}
                Icon={animatedIcons[s.slug] ?? CodeXmlIcon}
                index={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
