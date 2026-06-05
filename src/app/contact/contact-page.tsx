import { Mail, Phone, MapPin, MessageCircle, CalendarClock, Check, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { InquiryFormCard } from "@/components/inquiry-form-card";
import { FAQ } from "@/components/sections/faq";
import { site, whatsappLink } from "@/content/site";
import { generalFaqs } from "@/content/faqs";

const reasons = [
  "Senior, full-stack team",
  "Transparent weekly updates",
  "24-hour response, guaranteed",
  "You own all the code",
];

export function ContactPage() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const contactRows = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
    { icon: MapPin, label: "Location", value: site.location.full, href: undefined },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: whatsappLink() },
  ];

  return (
    <>
      <PageHero
        align="center"
        eyebrow="Contact"
        title="Let's build something together"
        description="Tell us about your project, ask a question, or just say hi. One team, one inbox, and a reply within 24 hours."
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
            {/* Left: contact + book-a-call */}
            <Reveal className="flex flex-col gap-6">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h2 className="text-lg font-semibold text-ink">Contact details</h2>
                <ul className="mt-6 space-y-5">
                  {contactRows.map((r) => {
                    const Row = (
                      <>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                          <r.icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-medium uppercase tracking-wide text-faint">{r.label}</span>
                          <span className="mt-0.5 block text-sm text-ink">{r.value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={r.label}>
                        {r.href ? (
                          <a
                            href={r.href}
                            target={r.href.startsWith("http") ? "_blank" : undefined}
                            rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                            className="flex items-center gap-3.5 transition-opacity hover:opacity-80"
                          >
                            {Row}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3.5">{Row}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Book a call (Calendly placeholder) */}
              <div className="rounded-3xl border border-line bg-night p-7 text-white shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-bright">
                  <CalendarClock className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-semibold">Prefer to talk it through?</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Book a free 20-minute intro call. No pitch, just a conversation about what you&apos;re building.
                </p>
                <a
                  href={calendly ?? whatsappLink("Hi Techvion! I'd like to book an intro call.")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-ink"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h2 className="text-base font-semibold text-ink">Why teams choose us</h2>
                <ul className="mt-4 space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-center gap-2.5 text-sm text-mutedink">
                      <Check className="h-4 w-4 shrink-0 text-accent-ink" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1} id="inquiry-form">
              <InquiryFormCard />
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading align="center" eyebrow="FAQ" title="Questions, answered" className="mb-12" />
          <FAQ items={generalFaqs} />
        </Container>
      </section>
    </>
  );
}
