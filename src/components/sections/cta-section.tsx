import { Container } from "@/components/site/layout";
import { CTAButton } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";

type CTASectionProps = {
  // `eyebrow` is accepted for call-site compatibility but no longer rendered.
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Dark, high-contrast conversion band used to close every page. */
export function CTASection({
  title = "Have a project in mind?",
  description = "Tell us what you're building. We'll reply within 24 hours with a clear, honest plan. No pressure, no jargon.",
  primary = { label: "Start a project", href: "/contact" },
  secondary = { label: "See our work", href: "/projects" },
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-night py-10 text-white md:py-14">
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={primary.href} variant="accent" size="lg" arrow>
              {primary.label}
            </CTAButton>
            {secondary && (
              <CTAButton href={secondary.href} variant="glass" size="lg">
                {secondary.label}
              </CTAButton>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
