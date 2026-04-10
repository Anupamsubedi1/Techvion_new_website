"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Code2, ShoppingCart, Video, Megaphone, FileText, Globe, Server } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development & Software Solutions",
    desc: "High-performance, scalable web apps and bespoke software tailored to your business.",
    features: ["Next.js + TypeScript", "API & Integrations", "Performance-first"],
  },
  {
    icon: ShoppingCart,
    title: "Custom E-commerce Development",
    desc: "Conversion-focused storefronts with modern UX and robust backend integrations.",
    features: ["Headless commerce", "Checkout optimization", "Analytics"],
  },
  {
    icon: Video,
    title: "Professional Video Editing & Graphic Design",
    desc: "Premium visuals to elevate your brand across platforms.",
    features: ["Brand kits", "Motion graphics", "Short-form & long-form"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    desc: "Search, social, and content strategies that drive measurable growth.",
    features: ["SEO/SEM", "Paid social", "Content"],
  },
  {
    icon: FileText,
    title: "Website Content Writing & SEO Copywriting",
    desc: "Clear, compelling copy that ranks and converts.",
    features: ["Keyword research", "On-page SEO", "Tone of voice"],
  },
  {
    icon: Globe,
    title: "Domain Registration & Management",
    desc: "Hassle-free domain purchasing and DNS management.",
    features: ["DNS setup", "SSL", "Renewals"],
  },
  {
    icon: Server,
    title: "Web Hosting & Managed Hosting",
    desc: "Reliable hosting with monitoring, backups, and security.",
    features: ["Uptime SLAs", "Security", "Backups"],
  },
];

export function ServicesPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const [phase, setPhase] = useState<"hidden" | "center" | "shuffle" | "final">("hidden");

  useEffect(() => {
    if (!isInView) return;
    // When the grid comes into view: hidden → center → shuffle → final
    setPhase("center");
    const shuffleTimer = setTimeout(() => setPhase("shuffle"), 600);
    const finalTimer = setTimeout(() => setPhase("final"), 1400);
    return () => {
      clearTimeout(shuffleTimer);
      clearTimeout(finalTimer);
    };
  }, [isInView]);

  // Scatter offsets for the "shuffle" phase — random-looking but deterministic
  const shuffleOffsets = [
    { x: -60, y: -30, rotate: -6 },
    { x: 80, y: 20, rotate: 5 },
    { x: -40, y: 40, rotate: -3 },
    { x: 50, y: -50, rotate: 7 },
    { x: -80, y: 10, rotate: -8 },
    { x: 30, y: -20, rotate: 4 },
    { x: -20, y: 50, rotate: -5 },
  ];

  const getCardAnimation = (i: number) => {
    switch (phase) {
      case "hidden":
        return { opacity: 0, scale: 0.8, x: 0, y: 0, rotate: 0 };
      case "center":
        return { opacity: 1, scale: 0.85, x: 0, y: 0, rotate: 0 };
      case "shuffle":
        return {
          opacity: 1,
          scale: 0.9,
          x: shuffleOffsets[i].x,
          y: shuffleOffsets[i].y,
          rotate: shuffleOffsets[i].rotate,
        };
      case "final":
        return { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 };
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-28 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Services Built to Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-base text-[#1F7A8C]"
          >
            From concept to deployment — end-to-end digital services engineered for performance and growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid — shuffle animation */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl" ref={gridRef}>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={getCardAnimation(i)}
                transition={{
                  duration: phase === "final" ? 0.6 : 0.5,
                  delay: phase === "final" ? i * 0.08 : 0,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={phase === "final" ? { y: -3 } : undefined}
                className="group flex flex-col rounded-xl border border-[#E1E5F2] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1E5F2] transition-colors group-hover:bg-[#022B3A]">
                  <s.icon className="h-5 w-5 text-[#1F7A8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-[#022B3A]">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#1F7A8C]">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-0.5 text-xs font-medium text-[#022B3A]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href="/inquiry"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1F7A8C] transition-colors hover:text-[#022B3A]"
                >
                  Get Started
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E1E5F2]/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#022B3A] md:text-4xl"
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-2 text-base text-[#1F7A8C]"
          >
            Tell us about your project and we&apos;ll recommend the right approach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/inquiry">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#022B3A] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1F7A8C]"
              >
                Send Inquiry <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
