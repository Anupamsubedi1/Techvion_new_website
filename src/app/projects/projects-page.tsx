"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { CTAButton } from "@/components/site/cta-button";
import { ProjectCard } from "@/components/sections/project-card";
import { CTASection } from "@/components/sections/cta-section";
import { caseStudies, mobileProjects, projectCategories, type MobileProject } from "@/content/projects";
import { cn } from "@/lib/utils";

const views = ["Websites", "Mobile apps"] as const;

export function ProjectsPage() {
  const reduce = useReducedMotion();
  const [view, setView] = useState<(typeof views)[number]>("Websites");
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const filtered = caseStudies.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Products we're proud to have shipped"
        description="Real client work, in production today. Web platforms, storefronts and mobile apps, each built with care, craft and a focus on outcomes."
        actions={
          <CTAButton href="/contact" variant="primary" size="lg" arrow>
            Start your project
          </CTAButton>
        }
      />

      <section className="bg-surface py-8 md:py-10">
        <Container>
          {/* View toggle */}
          <div className="flex justify-center">
            <div className="inline-flex gap-1 rounded-full border border-line bg-white p-1 shadow-soft">
              {views.map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                    view === v ? "text-white" : "text-mutedink hover:text-ink",
                  )}
                >
                  {view === v && (
                    <motion.span
                      layoutId={reduce ? undefined : "view-pill"}
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{v}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === "Websites" ? (
              <motion.div
                key="websites"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Filters */}
                <div className="mt-10 flex flex-wrap justify-center gap-2">
                  {projectCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={cn(
                        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                        filter === c
                          ? "border-ink bg-ink text-white"
                          : "border-line bg-white text-mutedink hover:border-ink-200 hover:text-ink",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <motion.div layout={!reduce} className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((p) => (
                      <motion.div
                        key={p.slug}
                        layout={!reduce}
                        initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ProjectCard project={p} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mx-auto mt-10 max-w-2xl text-center">
                  <h2 className="text-2xl font-semibold text-ink md:text-3xl">Mobile apps</h2>
                  <p className="mt-2 text-mutedink">
                    Production-ready Flutter apps focused on speed, clarity and real-world utility.
                  </p>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                  {mobileProjects.map((p) => (
                    <MobileCard key={p.title} project={p} reduce={!!reduce} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      <CTASection
        title="Your product could be next"
        description="Tell us what you're building. We'll reply within 24 hours with a clear, honest plan."
      />
    </>
  );
}

function MobileCard({ project, reduce }: { project: MobileProject; reduce: boolean }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const last = project.screenshots.length - 1;

  const prev = () => {
    setDir(-1);
    setIndex((p) => (p === 0 ? last : p - 1));
  };
  const next = () => {
    setDir(1);
    setIndex((p) => (p === last ? 0 : p + 1));
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-shadow hover:shadow-card">
      <div className="relative aspect-[9/16] overflow-hidden bg-surface">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={reduce ? false : { x: dir === 1 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: dir === 1 ? "-100%" : "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.screenshots[index]}
              alt={`${project.title} screen ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous screen"
          className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next screen"
          className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft transition-colors hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">
          {project.screenshots.map((_, i) => (
            <span key={i} className={cn("h-1.5 w-1.5 rounded-full", i === index ? "bg-ink" : "bg-ink/30")} />
          ))}
        </div>
      </div>
      <div className="p-5">
        <span className="label-mono text-accent-ink">{project.category}</span>
        <h3 className="mt-2 text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-mutedink">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
