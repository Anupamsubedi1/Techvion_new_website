"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { ProjectCard } from "@/components/sections/project-card";
import { CTASection } from "@/components/sections/cta-section";
import { caseStudies, mobileProjects, projectCategories, type MobileProject } from "@/content/projects";
import { metrics } from "@/content/metrics";
import { cn } from "@/lib/utils";

const views = ["Websites", "Mobile apps"] as const;

export function ProjectsPage() {
  const reduce = useReducedMotion();
  const [view, setView] = useState<(typeof views)[number]>("Websites");
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const featured = caseStudies[0];
  const showFeatured = view === "Websites" && filter === "All";
  const filtered = caseStudies.filter(
    (p) =>
      (filter === "All" || p.category === filter) && (!showFeatured || p.slug !== featured.slug),
  );

  return (
    <>
      {/* ---------- Cinematic night hero with proof tiles ---------- */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-25%] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
          aria-hidden="true"
        />
        <Container className="relative pb-20 pt-32 md:pb-24 md:pt-40">
          <Reveal className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl">
              Products we&apos;re proud to have{" "}
              <span className="text-gradient-accent">shipped</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              Real client work, in production today. Web platforms, storefronts and mobile apps,
              each built with care, craft and a focus on outcomes.
            </p>
            <div className="mt-9">
              <CTAButton href="/contact" variant="accent" size="lg" arrow>
                Start your project
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="text-gradient-accent text-3xl font-semibold tracking-tight md:text-4xl">
                  {m.value}
                  {m.suffix}
                </div>
                <div className="mt-1.5 text-sm text-white/50">{m.label}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <Container>
          {/* View toggle */}
          <div className="flex justify-center">
            <div className="inline-flex gap-1 rounded-full border border-line bg-white p-1 shadow-soft">
              {views.map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                    view === v ? "text-white" : "text-mutedink hover:text-ink",
                  )}
                >
                  {view === v && (
                    <motion.span
                      layoutId={reduce ? undefined : "view-pill"}
                      className="absolute inset-0 rounded-full bg-ink shadow-soft"
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
                        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                        filter === c
                          ? "border-ink bg-ink text-white shadow-soft"
                          : "border-line bg-white text-mutedink hover:-translate-y-0.5 hover:border-ink-200 hover:text-ink hover:shadow-soft motion-reduce:transform-none",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* Featured showcase */}
                {showFeatured && (
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-12"
                  >
                    <article className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-card lg:grid-cols-[1.25fr_1fr]">
                      <a
                        href={featured.live ?? undefined}
                        target={featured.live ? "_blank" : undefined}
                        rel={featured.live ? "noreferrer" : undefined}
                        className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[24rem]"
                        aria-label={`Visit the ${featured.title} live site`}
                      >
                        <Image
                          src={featured.image}
                          alt={`${featured.title}: ${featured.summary}`}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </a>
                      <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                          {featured.title}
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-mutedink md:text-base">
                          {featured.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {featured.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-mutedink"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {featured.live && (
                          <a
                            href={featured.live}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent-ink"
                          >
                            Visit live site
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </article>
                  </motion.div>
                )}

                <motion.div layout={!reduce} className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="mx-auto mt-12 max-w-2xl text-center">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    Mobile apps
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-mutedink">
                    Production-ready Flutter apps focused on speed, clarity and real-world utility.
                  </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
    <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
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

        {/* Arrows: always available on touch; fade in on pointer hover. */}
        <button
          onClick={prev}
          aria-label="Previous screen"
          className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft backdrop-blur-sm transition-all duration-200 hover:bg-white focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next screen"
          className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft backdrop-blur-sm transition-all duration-200 hover:bg-white focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">
          {project.screenshots.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-4 bg-ink" : "w-1.5 bg-ink/30",
              )}
            />
          ))}
        </div>
      </div>
      <div className="p-5">
        <span className="label-mono text-accent-ink">{project.category}</span>
        <h3 className="mt-2 text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mutedink">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-mutedink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
