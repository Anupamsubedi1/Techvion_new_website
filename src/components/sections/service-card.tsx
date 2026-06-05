import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "@/components/site/icon";
import type { ServiceSummary } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: ServiceSummary;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink-100 hover:shadow-card md:p-8",
        featured && "lg:row-span-2 lg:justify-between",
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white transition-transform duration-300 group-hover:scale-105">
          <Icon name={service.icon} className="h-6 w-6 text-accent-bright" />
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-ink">{service.name}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
        </div>
        <p className="mt-1 text-sm font-medium text-accent-ink">{service.tagline}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-mutedink">{service.summary}</p>
      </div>
      <ul className="relative mt-6 space-y-2 border-t border-line pt-5">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm text-ink">
            <Check className="h-4 w-4 shrink-0 text-accent-ink" />
            {b}
          </li>
        ))}
      </ul>
    </Link>
  );
}
