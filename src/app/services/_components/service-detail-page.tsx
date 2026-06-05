import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container, SectionHeading, Eyebrow } from "@/components/site/layout";
import { Reveal, Stagger, RevealItem } from "@/components/site/reveal";
import { CTAButton } from "@/components/site/cta-button";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { Icon } from "@/components/site/icon";
import { ServiceCard } from "@/components/sections/service-card";
import { services, serviceList } from "@/content/services";
import { whatsappLink } from "@/content/site";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const s = services[slug];
  if (!s) return null;
  const related = s.related.map((r) => serviceList.find((x) => x.slug === r)).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 grid-overlay-light" aria-hidden="true" />
        <Container className="relative pb-16 pt-32 md:pt-40">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-mutedink transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All services
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal>
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mutedink md:text-lg">
                {s.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/contact" variant="primary" size="lg" arrow>
                  Start a project
                </CTAButton>
                <CTAButton href={whatsappLink()} variant="outline" size="lg" external>
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </Reveal>

            {/* Proof card */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <div className="space-y-5">
                  {s.proof.map((p) => (
                    <div key={p.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0">
                      <span className="text-3xl font-semibold tracking-tight text-ink">{p.value}</span>
                      <span className="text-right text-sm text-mutedink">{p.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.capabilities.map((c) => (
                    <span key={c} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-mutedink">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="Everything you need, handled"
            description="A clear scope of work, with no vague line items and no surprise gaps."
            className="mb-14"
          />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{d.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The engagement"
            title="How this service runs"
            className="mb-14"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="text-sm font-semibold text-accent-ink">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedink">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading align="center" eyebrow="FAQ" title="Common questions" className="mb-12" />
          <FAQ items={s.faqs} />
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-4">
              <Reveal>
                <Eyebrow>Keep exploring</Eyebrow>
                <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">Related services</h2>
              </Reveal>
              <CTAButton href="/services" variant="ghost" arrow>
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
