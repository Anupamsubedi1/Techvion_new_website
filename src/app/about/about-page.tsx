"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const mission = [
  {
    icon: Target,
    title: "Mission",
    text: "Design and deliver business-ready digital solutions that solve real operational and growth challenges.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Become a trusted global technology partner known for clarity, quality, and measurable outcomes.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Professional execution, transparent communication, product ownership, and long-term client success.",
  },
];

const strengths = [
  "Remote-first, cross-functional team with product, engineering, QA, and delivery alignment",
  "Structured execution from discovery and architecture to deployment and post-launch support",
  "Business-focused software quality standards with transparent reporting and predictable milestones",
  "Scalable delivery model for startups, SMEs, and enterprise modernization initiatives",
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
            Engineering Business<br />Growth Through Technology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-3xl text-base leading-relaxed text-[#1F7A8C]"
          >
            Techvion delivers custom software, web and mobile applications, cloud solutions, QA, AI/ML, DevOps, and API integrations for organizations that need reliable digital systems and measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#BFDBF7] bg-gradient-to-r from-[#E1E5F2]/70 to-white p-6 md:p-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">Our Foundation</span>
            <h2 className="mt-2 text-3xl font-bold text-[#022B3A] md:text-4xl">A professional team with clear principles</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#1F7A8C]">
              Techvion is built on disciplined execution, strong engineering standards, and transparent client collaboration.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
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
              <p className="mt-2 text-base leading-relaxed text-[#1F7A8C]">
                We combine disciplined engineering with business context to deliver dependable digital outcomes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-xl border border-[#BFDBF7] bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F7A8C]">Experience</p>
                  <p className="text-lg font-bold text-[#022B3A]">2 Years</p>
                </div>
                <div className="rounded-xl border border-[#BFDBF7] bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F7A8C]">Founded</p>
                  <p className="text-lg font-bold text-[#022B3A]">2024</p>
                </div>
              </div>

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
                Founded in 2024, Techvion was established to help businesses turn complex requirements into reliable, scalable digital products.
                In just 2 years, we have grown into a trusted delivery partner for companies seeking quality execution across software, cloud, and product operations.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1F7A8C]">
                Our approach is practical and outcome-focused: understand the business goal, build the right solution, and support teams after launch to sustain performance and long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#BFDBF7] bg-gradient-to-b from-white to-[#E1E5F2]/60 px-6 py-14 text-center shadow-sm md:px-12 md:py-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#022B3A] md:text-5xl"
          >
            Ready to work together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#1F7A8C]"
          >
            Let&apos;s align on your goals and build a solution that is scalable, maintainable, and ready for production growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/inquiry">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#022B3A] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1F7A8C]"
              >
                Start a Project <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#BFDBF7] px-8 py-4 text-sm font-medium text-[#022B3A] transition-colors hover:bg-[#E1E5F2]"
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
