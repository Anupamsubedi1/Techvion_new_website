import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { CTASection } from "@/components/sections/cta-section";
import { Icon } from "@/components/site/icon";
import { ServiceCard } from "@/components/sections/service-card";
import { IndustrySolutions } from "@/components/sections/industry-solutions";
import { services, serviceList } from "@/content/services";
import { whatsappLink } from "@/content/site";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const s = services[slug];
  if (!s) return null;
  const related = s.related.map((r) => serviceList.find((x) => x.slug === r)).filter(Boolean);

  return (
    <>
      {/* ---------- Cinematic night hero ---------- */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-25%] h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-[380px] w-[520px] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <Container className="relative pb-20 pt-32 md:pb-28 md:pt-40">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All services
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent-bright">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-bright">
                  {s.name}
                </span>
              </div>

              <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-[3.6rem]">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                {s.intro}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm"
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-accent-bright" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/contact" variant="accent" size="lg" arrow>
                  Start a project
                </CTAButton>
                <CTAButton href={whatsappLink()} variant="glass" size="lg" external>
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </Reveal>

            {/* Glass spec card */}
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-bright/60 to-transparent"
                  aria-hidden="true"
                />
                <span className="label-mono text-white/40">At a glance</span>
                <div className="mt-6 divide-y divide-white/10">
                  {s.proof.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="text-gradient-accent text-4xl font-semibold tracking-tight">
                        {p.value}
                      </span>
                      <span className="max-w-[10rem] text-right text-sm leading-snug text-white/55">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 border-t border-white/10 pt-6">
                  <span className="label-mono text-white/40">Stack &amp; capabilities</span>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {s.capabilities.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Deliverables: bento grid ---------- */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Everything you need, handled
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
              A clear scope of work, with no vague line items or surprise gaps.
            </p>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d, i) => {
              const isLead = i === 0;
              const isWide = i === s.deliverables.length - 1;
              return (
                <RevealItem
                  key={d.title}
                  className={
                    isLead ? "lg:col-span-2" : isWide ? "md:col-span-2 lg:col-span-3" : undefined
                  }
                >
                  <div
                    className={`group relative flex h-full overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none ${
                      isWide ? "flex-col gap-5 p-8 sm:flex-row sm:items-center sm:gap-8 md:p-10" : "flex-col p-8"
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    {isLead && (
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.07] blur-2xl"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-accent-bright ${
                        isLead ? "h-14 w-14" : "h-12 w-12"
                      }`}
                    >
                      <Icon name={d.icon} className={isLead ? "h-7 w-7" : "h-6 w-6"} />
                    </span>
                    <div className={isWide ? "" : "mt-5"}>
                      <h3 className={`font-semibold text-ink ${isLead ? "text-xl" : "text-base"}`}>
                        {d.title}
                      </h3>
                      <p
                        className={`mt-2 leading-relaxed text-mutedink ${
                          isLead ? "max-w-lg text-[15px]" : "text-sm"
                        }`}
                      >
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Industry SaaS platforms (Custom Software only) */}
      {slug === "custom-software" && <IndustrySolutions />}

      {/* ---------- Process: editorial with ghost numbers ---------- */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-20">
            <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              How this service runs
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
              A calm, transparent engagement, so you always know what&apos;s happening and
              what&apos;s next.
            </p>
          </Reveal>
          <Stagger className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <RevealItem key={step.title} className="relative">
                <span
                  className="pointer-events-none absolute -top-9 left-0 select-none text-[5.5rem] font-bold leading-none tracking-tight text-ink/[0.05]"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="relative pt-8">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-bright" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-4">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Related services
                </h2>
              </Reveal>
              <CTAButton href="/#services" variant="ghost" arrow>
                All services
              </CTAButton>
            </div>
            <Stagger className="grid gap-5 md:grid-cols-2">
              {related.map((r) => (
                <RevealItem key={r!.slug}>
                  <ServiceCard service={r!} />
                </RevealItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CTASection
        title="Let's scope your project"
        description="Share your goals and we'll come back within 24 hours with a clear plan, timeline and price."
      />
    </>
  );
}
