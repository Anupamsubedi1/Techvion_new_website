import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { Icon } from "@/components/site/icon";
import { ServiceCard } from "@/components/sections/service-card";
import { IndustrySolutions } from "@/components/sections/industry-solutions";
import { services, serviceList } from "@/content/services";
import { whatsappLink } from "@/content/site";

/** Centered, editorial section header used across the service page. */
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-mutedink md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const s = services[slug];
  if (!s) return null;
  const related = s.related.map((r) => serviceList.find((x) => x.slug === r)).filter(Boolean);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 grid-overlay-light" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-28 right-[-6%] h-[440px] w-[640px] rounded-full bg-accent/[0.08] blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[520px] rounded-full bg-ink/[0.05] blur-[150px]"
          aria-hidden="true"
        />
        <Container className="relative pb-16 pt-32 md:pb-24 md:pt-40">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-mutedink transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All services
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 py-1.5 pl-1.5 pr-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-accent-bright shadow-soft">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-ink">
                  {s.name}
                </span>
              </div>

              <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-5xl md:text-[3.35rem]">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
                {s.intro}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-soft"
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-accent-ink" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/contact" variant="primary" size="lg" arrow>
                  Start a project
                </CTAButton>
                <CTAButton href={whatsappLink()} variant="outline" size="lg" external>
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </Reveal>

            {/* At-a-glance spec card */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-bright via-accent to-transparent"
                  aria-hidden="true"
                />
                <span className="label-mono text-accent-ink">At a glance</span>
                <div className="mt-6 divide-y divide-line">
                  {s.proof.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        {p.value}
                      </span>
                      <span className="max-w-[9.5rem] text-right text-sm leading-snug text-mutedink">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 border-t border-line pt-6">
                  <span className="label-mono text-faint">Stack &amp; capabilities</span>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {s.capabilities.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-mutedink"
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

      {/* ---------- Deliverables ---------- */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="What you get"
            title="Everything you need, handled"
            description="A clear scope of work, with no vague line items or surprise gaps."
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d) => (
              <RevealItem key={d.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card motion-reduce:transform-none">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-accent-bright">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{d.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Industry SaaS platforms (Custom Software only) */}
      {slug === "custom-software" && <IndustrySolutions />}

      {/* ---------- Process ---------- */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="How this service runs"
            description="A calm, transparent engagement, so you always know what's happening and what's next."
          />
          <div className="relative">
            {/* connecting rail on desktop */}
            <div
              className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
              aria-hidden="true"
            />
            <Stagger className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {s.process.map((step, i) => (
                <RevealItem key={step.title} className="relative flex flex-col">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white text-sm font-bold text-accent-ink shadow-soft">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{step.desc}</p>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* ---------- FAQ ---------- */}
      {s.faqs.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink md:text-4xl">
                  Questions, answered
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-mutedink">
                  Everything worth knowing before we start. Still curious?{" "}
                  <Link href="/contact" className="font-medium text-accent-ink underline-offset-4 hover:underline">
                    Talk to us
                  </Link>
                  .
                </p>
              </Reveal>
              <FAQ items={s.faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-4">
              <Reveal>
                <Eyebrow>Keep exploring</Eyebrow>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
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
