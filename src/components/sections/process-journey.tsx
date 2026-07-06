"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useScroll, useSpring, useTransform, useMotionValueEvent, motion, type MotionValue } from "framer-motion";
import { Container, SectionHeading } from "@/components/site/layout";
import { Icon } from "@/components/site/icon";
import { journeySteps } from "@/content/process";
import { cn } from "@/lib/utils";

/**
 * Step-by-step engagement journey: a light, editorial alternating timeline.
 * A single centre rail whose fill line is drawn as you scroll; each numbered
 * node stays white until that line reaches it, then lights up in sequence.
 */
function StepRow({
  step,
  index,
  progress,
  trackRef,
}: {
  step: (typeof journeySteps)[number];
  index: number;
  progress: MotionValue<number>;
  trackRef: RefObject<HTMLDivElement | null>;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const even = index % 2 === 0;

  // The node stays white until the rail's fill line reaches it. We measure where
  // this node sits along the rail (a 0–1 fraction) and light it up once the
  // scroll-linked fill passes that point, so colour and line stay in sync.
  const [active, setActive] = useState(false);
  const thresholdRef = useRef(1);

  useEffect(() => {
    const measure = () => {
      const badge = badgeRef.current;
      const track = trackRef.current;
      if (!badge || !track) return;
      const b = badge.getBoundingClientRect();
      const t = track.getBoundingClientRect();
      thresholdRef.current = t.height ? (b.top + b.height / 2 - t.top) / t.height : 1;
      setActive(progress.get() >= thresholdRef.current);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [progress, trackRef]);

  useMotionValueEvent(progress, "change", (v) => {
    setActive(v >= thresholdRef.current);
  });

  const visual = step.image ? (
    // Real photo (when provided). Tint keeps disparate photos on-brand and the
    // corner number/icon legible over any image.
    <div className="relative aspect-[5/3] overflow-hidden rounded-3xl border border-line shadow-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={step.image} alt={step.title} loading="lazy" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ink/90 text-accent-bright backdrop-blur">
        <Icon name={step.icon} className="h-5 w-5" />
      </span>
    </div>
  ) : (
    // Default: a clean, on-brand icon panel (no photo needed).
    <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white to-surface shadow-soft">
      <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[7.5rem] font-bold leading-none text-ink/[0.05]">
        {step.num}
      </span>
      <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-ink text-accent-bright shadow-glow">
        <Icon name={step.icon} className="h-9 w-9" />
      </span>
    </div>
  );

  const text = (
    <div className={cn(even ? "md:pl-2" : "md:pr-2 md:text-right")}>
      <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mutedink md:text-[15px]">{step.desc}</p>
    </div>
  );

  return (
    <div className="relative flex items-start gap-5 md:grid md:grid-cols-[1fr_3.5rem_1fr] md:items-center md:gap-8">
      {/* Numbered node: white until the fill line reaches it, then it lights up */}
      <div className="flex shrink-0 justify-center md:col-start-2 md:row-start-1">
        <div
          ref={badgeRef}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 ease-out",
            active
              ? "scale-100 border-accent/60 bg-ink text-accent-bright shadow-glow"
              : "scale-95 border-line bg-white text-faint",
          )}
        >
          {step.num}
        </div>
      </div>

      {/* Copy */}
      <div className={cn("flex-1 md:row-start-1", even ? "md:col-start-3" : "md:col-start-1")}>{text}</div>

      {/* Visual tile (desktop only) */}
      <div className={cn("hidden md:row-start-1 md:block", even ? "md:col-start-1" : "md:col-start-3")}>
        {visual}
      </div>
    </div>
  );
}

export function ProcessJourney() {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Scroll progress across the steps: 0 when the first step reaches the middle
  // of the viewport, 1 when the last one does. A spring smooths the motion.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const dotTop = useTransform(progress, (v) => `${v * 100}%`);
  const dotOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          align="center"
          title="Our step-by-step process"
          description="Follow our streamlined process to get your project started, from first call to a product you're proud to launch."
          className="mb-14 md:mb-20"
        />

        <div ref={railRef} className="relative mx-auto max-w-5xl">
          {/* Centre rail (badge-aligned on mobile, page-centre on desktop) that
              fills from top to bottom as you scroll, tracing step 01 → 02 → … */}
          <div
            ref={trackRef}
            className="pointer-events-none absolute bottom-2 left-7 top-2 w-px md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            {/* faint base track */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-line to-transparent" />
            {/* animated fill, drawn from the top */}
            <motion.div
              style={{ scaleY: progress }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-accent/70 via-accent to-accent"
            />
            {/* leading point that travels down the rail */}
            <motion.div
              style={{ top: dotTop, opacity: dotOpacity, x: "-50%", y: "-50%" }}
              className="absolute left-1/2 h-3 w-3 rounded-full bg-accent shadow-glow ring-4 ring-accent/20"
            />
          </div>
          <div className="flex flex-col gap-12 md:gap-16">
            {journeySteps.map((step, i) => (
              <StepRow key={step.num} step={step} index={i} progress={progress} trackRef={trackRef} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
