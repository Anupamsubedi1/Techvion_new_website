import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Techvion brand logo. Uses the official techvion-logo.png, which already
 * contains both the mark and the "TECHVION" wordmark, so no separate text is
 * rendered. The white circular badge reads cleanly on light and dark surfaces.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Techvion home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/techvion-logo.png"
        alt="Techvion"
        width={160}
        height={160}
        priority
        sizes="160px"
        className="h-10 w-auto"
      />
    </Link>
  );
}
