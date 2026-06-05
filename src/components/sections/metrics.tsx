import { Container, SectionHeading } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { metrics } from "@/content/metrics";

export function Metrics({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        {withHeading && (
          <SectionHeading
            align="center"
            eyebrow="By the numbers"
            title="Proof, not promises"
            description="A small, senior team with a serious standard for delivery, and the track record to back it."
            className="mb-14"
          />
        )}
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className="flex flex-col items-center border-line p-7 text-center odd:border-r md:border-r md:[&:last-child]:border-r-0 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                <AnimatedCounter end={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-ink">{m.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-faint">{m.note}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
