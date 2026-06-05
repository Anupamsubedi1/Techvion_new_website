"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";

export function FAQ({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((faq) => (
          <AccordionItem
            key={faq.q}
            value={faq.q}
            className="overflow-hidden rounded-2xl border border-line bg-white px-5 transition-colors data-[state=open]:border-ink-100"
          >
            <AccordionTrigger className="py-5 text-left text-base font-medium text-ink hover:no-underline [&>svg]:text-accent-ink">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-mutedink">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
