"use client";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const strengths = [
  { title: "Precision Engineering", desc: "Clean, well-documented code built for long-term maintainability." },
  { title: "Design-First Thinking", desc: "Every interface is crafted with accessibility and user delight in mind." },
  { title: "Transparent Communication", desc: "Weekly updates, clear timelines, no surprises." },
  { title: "Measurable Outcomes", desc: "We track metrics that matter — traffic, conversions, performance." },
];

/* Each strength card enters from a unique direction, sequentially */
const cardDirections = [
  { x: -100, y: 0 },   // left
  { x: 0, y: 70 },     // bottom
  { x: 0, y: 70 },     // bottom
  { x: 100, y: 0 },    // right
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "Custom software, web apps, digital marketing, UI/UX, and managed support.",
  },
  {
    q: "How do you build custom software?",
    a: "We follow a discovery-to-deploy workflow with agile iterations and measurable milestones.",
  },
  {
    q: "How can I start a project?",
    a: "Use our inquiry form to share goals, and we'll schedule a quick discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we collaborate with teams worldwide across time zones and industries.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Next.js, React, TypeScript, Node.js, and cloud-first stacks.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    const t0 = setTimeout(() => setStep(0), 400);
    const t1 = setTimeout(() => setStep(1), 1400);
    const t2 = setTimeout(() => setStep(2), 2400);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  const shouldShow = (i: number) => {
    if (i === 0) return step >= 0;
    if (i === 1 || i === 2) return step >= 1;
    if (i === 3) return step >= 2;
    return false;
  };

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
            Why Techvion
          </span>
          <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
            Built different. Delivered better.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: cardDirections[i].x, y: cardDirections[i].y }}
              animate={
                shouldShow(i)
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: cardDirections[i].x, y: cardDirections[i].y }
              }
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex gap-3.5 rounded-xl border border-[#E1E5F2] bg-white p-4 transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1F7A8C]" />
              <div>
                <div className="text-base font-bold text-[#022B3A]">{s.title}</div>
                <p className="mt-0.5 text-sm text-[#1F7A8C]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="mx-auto max-w-2xl space-y-2.5">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="overflow-hidden rounded-xl border border-[#E1E5F2] bg-white px-4"
                >
                  <AccordionTrigger className="py-3.5 text-left text-base font-semibold text-[#022B3A] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3.5 text-sm leading-relaxed text-[#1F7A8C]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}