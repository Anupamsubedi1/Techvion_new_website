import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Techvion brand logo.
 *
 * The source PNG is a circular badge that bakes in both the T mark and a
 * "TECHVION" wordmark. Here we crop the badge down to just the T mark and frame
 * it as a rounded rectangle tile, then set a clean, typed "Techvion" wordmark to
 * its right. The crop window (x 205–885, y 115–705 of the 1024px source) is
 * expressed as CSS percentages so it holds at any tile size.
 *
 * The wordmark uses `currentColor`, so it renders ink on light surfaces (navbar)
 * and white on dark ones (footer, mobile menu) without any tone prop.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Techvion home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {/* Mark tile: badge cropped to the T glyph, framed as a rounded rectangle */}
      <span className="relative block h-11 aspect-[68/59] shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-line shadow-soft transition-shadow duration-200 group-hover:shadow-card">
        <Image
          src="/techvion-logo.png"
          alt=""
          width={1024}
          height={1024}
          priority
          sizes="64px"
          className="absolute left-[-30.1%] top-[-19.5%] max-w-none"
          style={{ width: "150.6%", height: "auto" }}
        />
      </span>

      {showWordmark && (
        <span className="text-[1.3rem] font-semibold leading-none tracking-[-0.03em] text-current">
          Techvion
        </span>
      )}
    </Link>
  );
}
