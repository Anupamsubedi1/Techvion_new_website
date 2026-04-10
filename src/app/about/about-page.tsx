"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const mission = [
  {
    icon: Target,
    title: "Mission",
    text: "Deliver high-performance digital products that meaningfully advance our clients\u2019 businesses.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Set the global standard for modern, accessible, and scalable digital experiences.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Quality over quantity, radical transparency, empathy-driven design, and consistent reliability.",
  },
];

const strengths = [
  "International-ready delivery with structured milestones",
  "Cross-functional team of developers, designers, and marketers",
  "Agile development with clear communication at every step",
  "Post-launch support and performance monitoring",
];

export function AboutPage() {
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
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Built to Deliver.<br />Driven by Purpose.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-base text-[#1F7A8C]"
          >
            Techvion is a remote-first digital agency combining premium design and engineering to build software that scales.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {mission.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-[#E1E5F2] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1E5F2] transition-colors group-hover:bg-[#022B3A]">
                  <item.icon className="h-4 w-4 text-[#1F7A8C] transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#022B3A]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#1F7A8C]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths + Timeline */}
      <section className="bg-[#E1E5F2]/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">Why Techvion</span>
              <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">What sets us apart</h2>
              <p className="mt-2 text-base text-[#1F7A8C]">We are a lean, focused team that delivers ambitious projects with clarity and craft.</p>
              <ul className="mt-8 space-y-4">
                {strengths.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F7A8C]" />
                    <span className="text-[#022B3A]">{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why Techvion */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">Why Techvion</span>
              <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">Our Story</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#1F7A8C]">
                Founded in 2023, Techvion started with a simple belief: every business deserves software that&apos;s built right.
                From our first project to delivering multi-vertical solutions across countries, we&apos;ve grown by staying focused on quality, transparency, and measurable results.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1F7A8C]">
                In 2024 we expanded into performance marketing and managed hosting, and by 2025 we became a full-service digital partner — from idea to launch and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#022B3A] md:text-4xl"
          >
            Ready to work together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-base text-[#1F7A8C]"
          >
            Let&apos;s discuss your project and build something exceptional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/inquiry">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#022B3A] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1F7A8C]"
              >
                Start a Project <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#BFDBF7] px-7 py-3 text-sm font-medium text-[#022B3A] transition-colors hover:bg-[#E1E5F2]"
              >
                Contact Us
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
