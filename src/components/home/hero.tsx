"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/site/layout";
import { CTAButton } from "@/components/site/cta-button";
import { Icon } from "@/components/site/icon";
import { trustChips } from "@/content/metrics";
import { EASE_OUT_EXPO } from "@/lib/motion";

/**
 * Ambient hero background loop, served from Cloudinary (q_auto = auto bitrate /
 * quality per device). Hosting the mp4 on the CDN keeps the heavy binary out of
 * the git repo and serves it fast and cached, rather than bundling it in /public.
 */
const HERO_VIDEO =
  "https://res.cloudinary.com/djumoedpv/video/upload/q_auto/v1780679011/vqlwpngjfmbjlwslktgs.mp4";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE_OUT_EXPO },
        };

  return (
    <section className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-night text-white">
      {/* Ambient background video (skipped entirely under reduced-motion) */}
      {!reduce && (
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}

      {/* Light, flat scrim (no gradient) just to keep the headline legible
          while the background video stays clearly visible. */}
      <div className="pointer-events-none absolute inset-0 bg-night/35" aria-hidden="true" />

      <Container className="relative w-full py-28 text-center md:py-36">
        <motion.div {...rise(0)} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent-bright" />
            A remote-first product studio
          </span>
        </motion.div>

        {/* H1 rendered statically (no opacity animation) to keep LCP fast */}
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          We design, build &amp; <span className="text-gradient-accent">scale</span> software teams rely on
        </h1>

        <motion.p
          {...rise(0.12)}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 md:text-lg"
        >
          From first idea to production-grade platform, Techvion ships fast, scalable web,
          mobile and e-commerce products, then sticks around to help them grow.
        </motion.p>

        <motion.div
          {...rise(0.18)}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CTAButton href="/contact" variant="accent" size="lg" arrow>
            Start a project
          </CTAButton>
          <CTAButton href="/projects" variant="glass" size="lg">
            See our work
          </CTAButton>
        </motion.div>

        <motion.ul
          {...rise(0.26)}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/55"
        >
          {trustChips.map((c) => (
            <li key={c.label} className="inline-flex items-center gap-2">
              <Icon name={c.icon} className="h-4 w-4 text-accent-bright" />
              {c.label}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
