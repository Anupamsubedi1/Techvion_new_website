"use client";
import { motion, useInView } from "framer-motion";
import { BarChart3, CheckCircle, Compass, Lightbulb, PenTool, Rocket, Settings } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Compass, title: "Discover", desc: "Deep-dive into your goals, users, and constraints." },
  { icon: Lightbulb, title: "Ideate", desc: "Explore concepts and define the right solution." },
  { icon: PenTool, title: "Design", desc: "Craft pixel-perfect UI and user journeys." },
  { icon: Settings, title: "Develop", desc: "Engineer robust, scalable, production code." },
  { icon: BarChart3, title: "Test & QA", desc: "Validate quality across browsers and devices." },
  { icon: Rocket, title: "Launch", desc: "Deploy with confidence and monitor performance." },
  { icon: CheckCircle, title: "Grow", desc: "Iterate based on data and user feedback." },
];

export function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
            How We Work
          </span>
          <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
            A process built for results
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-base text-[#1F7A8C]">
            From first conversation to live product — a structured, transparent delivery model.
          </p>
        </motion.div>

        <div className="relative mt-14" ref={gridRef}>
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#E1E5F2] md:block" />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 120 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
                transition={{
                  delay: i * 0.28,
                  duration: 0.75,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1E5F2] bg-white transition-all duration-300 group-hover:border-[#BFDBF7] group-hover:bg-[#022B3A]">
                  <step.icon className="h-6 w-6 text-[#1F7A8C] transition-colors group-hover:text-white" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#022B3A] text-[8px] font-bold text-white group-hover:bg-[#1F7A8C]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#022B3A]">{step.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-[#1F7A8C]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


