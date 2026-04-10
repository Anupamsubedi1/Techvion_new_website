"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";

const metrics = [
  { label: "Client Satisfaction", value: 100, suffix: "%", note: "5-star rated across all engagements" },
  { label: "On-Time Delivery", value: 98, suffix: "%", note: "Consistent across 3+ years" },
  { label: "Projects Completed", value: 8, suffix: "+", note: "Across industries and geographies" },
  { label: "Countries Served", value: 2, suffix: "", note: "Global delivery, local understanding" },
];

export function MetricsSection() {
  return (
    <section className="bg-[#E1E5F2]/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
            By the Numbers
          </span>
          <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
            Proven results, not just promises
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center rounded-xl border border-[#E1E5F2] bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="text-4xl font-extrabold text-[#022B3A] md:text-5xl">
                <AnimatedCounter end={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold text-[#1F7A8C]">{m.label}</div>
              <div className="mt-1 text-xs text-[#1F7A8C]/60">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


