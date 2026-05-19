'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface AccordionItem {
  q: string;
  a: ReactNode;
}

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="rounded-card border border-border bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="display text-[19px] font-semibold tracking-tight text-ink">
                {item.q}
              </span>
              <span
                aria-hidden
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-pill border border-border text-muted transition-transform',
                  isOpen && 'rotate-45 border-warm text-warm',
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden px-6 transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
              )}
            >
              <div className="min-h-0 text-[15px] leading-relaxed text-muted">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
