"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
}

export function ServiceDetailPage({ data }: { data: ServiceData }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-28 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1F7A8C] transition-colors hover:text-[#022B3A]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Services
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 block text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]"
          >
            {data.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 text-3xl font-bold text-[#022B3A] md:text-5xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-[#1F7A8C]"
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E1E5F2]/40 px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6">
          {data.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#022B3A] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-[#1F7A8C]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#022B3A] md:text-3xl"
          >
            What&apos;s Included
          </motion.h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-xl border border-[#E1E5F2] bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F7A8C]" />
                  <div>
                    <h3 className="text-base font-bold text-[#022B3A]">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#1F7A8C]">{f.desc}</p>
                  </div>
                </div>
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
            className="text-2xl font-bold text-[#022B3A] md:text-3xl"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-2 text-base text-[#1F7A8C]"
          >
            Tell us about your project and we&apos;ll craft a custom plan.
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
