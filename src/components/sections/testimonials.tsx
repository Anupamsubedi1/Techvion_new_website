import { Container, SectionHeading } from "@/components/site/layout";
import { Stagger, RevealItem } from "@/components/site/reveal";
import { testimonials as allTestimonials } from "@/content/testimonials";

export function Testimonials({
  limit,
  tone = "surface",
}: {
  limit?: number;
  tone?: "surface" | "light";
}) {
  const items = limit ? allTestimonials.slice(0, limit) : allTestimonials;
  return (
    <section className={tone === "surface" ? "bg-surface py-20 md:py-28" : "bg-white py-20 md:py-28"}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Client words"
          title="The team clients keep coming back to"
          description="Real engagements, real relationships. Here's what working with Techvion sounds like."
          className="mb-14"
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <RevealItem
              key={t.company}
              as="article"
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft"
            >
              <div className="mb-5 flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="flex-1 text-[15px] leading-relaxed text-ink">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-medium text-ink">{t.role}</div>
                  <div className="text-xs text-faint">{t.company}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}
