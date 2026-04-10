"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#E1E5F2]/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
              Ready to build something remarkable?
            </h2>
            <p className="mt-3 text-base text-[#1F7A8C]">
              Tell us about your project. We&apos;ll respond within 24 hours with a clear game plan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/inquiry">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#022B3A] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1F7A8C]"
              >
                Start Your Project <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Link>
            <Link href="/projects">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#BFDBF7] px-7 py-3 text-sm font-medium text-[#022B3A] transition-colors hover:bg-[#E1E5F2]"
              >
                View Our Work
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


