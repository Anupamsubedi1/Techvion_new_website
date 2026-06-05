import { Container } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated ${updated}`} />
      <section className="bg-white pb-24">
        <Container size="narrow">
          <p className="text-base leading-relaxed text-mutedink">{intro}</p>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-[15px] leading-relaxed text-mutedink">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-12 rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-faint">
            This document is provided as a clear, good-faith summary. Have it reviewed by legal
            counsel before relying on it for your jurisdiction.
          </p>
        </Container>
      </section>
    </>
  );
}
