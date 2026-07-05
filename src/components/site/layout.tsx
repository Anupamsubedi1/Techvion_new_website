import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Max-width content container with responsive gutters. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full container-px",
        size === "wide" && "max-w-[1200px]",
        size === "default" && "max-w-6xl",
        size === "narrow" && "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

type Tone = "light" | "surface" | "night";

/** Vertical section band with a background tone and generous rhythm. */
export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-10 md:py-14",
        tone === "surface" && "bg-surface",
        tone === "night" && "bg-night text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Small mono eyebrow label. */
export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2",
        onDark ? "text-accent-bright" : "text-accent-ink",
        className,
      )}
    >
      <span className={cn("h-1 w-1 rounded-full", onDark ? "bg-accent-bright" : "bg-accent")} />
      {children}
    </span>
  );
}

/**
 * Section header: title + optional description.
 * Center or left aligned, light or dark tone.
 */
export function SectionHeading({
  title,
  description,
  align = "left",
  onDark = false,
  className,
  titleClassName,
}: {
  // `eyebrow` is accepted for call-site compatibility but no longer rendered.
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className,
      )}
    >
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-[2.75rem]",
          onDark ? "text-white" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            onDark ? "text-white/65" : "text-mutedink",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
