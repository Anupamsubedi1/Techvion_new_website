import { Container, Eyebrow } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  actions,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "night";
  align?: "left" | "center";
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const onDark = tone === "night";
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        onDark ? "bg-night text-white" : "bg-white",
      )}
    >
      <div
        className={cn("pointer-events-none absolute inset-0", onDark ? "grid-overlay" : "grid-overlay-light")}
        aria-hidden="true"
      />
      {onDark && (
        <div
          className="pointer-events-none absolute left-1/2 top-[-20%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
          aria-hidden="true"
        />
      )}
      <Container className={cn("relative pb-14 pt-32 md:pb-20 md:pt-40", align === "center" && "text-center")}>
        <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl",
              onDark ? "text-white" : "text-ink",
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-pretty text-base leading-relaxed md:text-lg",
                align === "center" && "mx-auto",
                onDark ? "text-white/65" : "text-mutedink",
              )}
            >
              {description}
            </p>
          )}
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
