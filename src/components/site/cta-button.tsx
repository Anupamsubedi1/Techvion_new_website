import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cta = cva(
  "group/cta relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-600 hover:shadow-card",
        accent:
          "bg-accent text-white shadow-[0_8px_30px_-8px_rgba(21,151,168,0.55)] hover:-translate-y-0.5 hover:bg-accent-ink",
        light:
          "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:bg-ink-50",
        outline:
          "border border-line bg-white text-ink hover:border-ink-200 hover:bg-surface",
        glass:
          "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10 focus-visible:ring-offset-night",
        ghost: "text-ink hover:bg-surface",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CTAButtonProps = VariantProps<typeof cta> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Append a trailing arrow that nudges on hover. */
  arrow?: boolean;
  /** Treat as external link (renders <a target=_blank>). */
  external?: boolean;
  "aria-label"?: string;
};

export function CTAButton({
  href,
  children,
  variant,
  size,
  className,
  arrow = false,
  external = false,
  ...rest
}: CTAButtonProps) {
  const classes = cn(cta({ variant, size }), className);
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
      )}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a
        href={href}
        target={external || href.startsWith("http") ? "_blank" : undefined}
        rel={external || href.startsWith("http") ? "noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
