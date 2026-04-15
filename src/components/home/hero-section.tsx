"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const words = ["Design.", "Build.", "Scale."];

const slides = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1589884629108-3193400c7cc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentWord = useMemo(() => words[wordIndex], [wordIndex]);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const speed = deleting ? 80 : 150;
    const id = setTimeout(() => {
      if (!deleting) {
        const next = currentWord.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === currentWord) setTimeout(() => setDeleting(true), 900);
      } else {
        const next = currentWord.slice(0, Math.max(typedText.length - 1, 0));
        setTypedText(next);
        if (next.length === 0) {
          setDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(id);
  }, [currentWord, deleting, typedText]);

  return (
    <section className="relative flex h-screen w-full max-w-full flex-col overflow-hidden bg-[#FFFFFF]">
      {/* Background photos — visible, crossfading */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[active]}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#022B3A]/80 via-[#022B3A]/30 to-transparent" />

      {/* Content — bottom-center */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-end px-4 pb-32 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We{" "}
            <span className="inline-flex min-w-[2ch] items-baseline text-[#BFDBF7]">
              {typedText}
              <span className="ml-0.5 inline-block h-[0.8em] w-[2px] animate-pulse rounded-sm bg-[#BFDBF7]" />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-lg text-center text-base leading-relaxed text-white/80 md:text-lg"
        >
          Scalable software, high-impact digital experiences, and growth-driven
          solutions — from idea to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/inquiry">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1F7A8C] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7B9CB3] sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
            >
              View Our Work
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

