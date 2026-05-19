'use client';

import { useEffect, useState } from 'react';

interface Item {
  id: string;
  text: string;
  isSeed: boolean;
  ago: string;
}

export function ActivityTickerClient({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 240);
    }, 4500);
    return () => clearInterval(interval);
  }, [items.length]);

  if (!items.length) return null;
  const current = items[index];
  const hasSeed = items.some((i) => i.isSeed);

  return (
    <div className="fixed bottom-3 left-3 z-40 max-w-[min(92vw,360px)] sm:bottom-6 sm:left-6 hidden md:block">
      <div className="rounded-pill border border-border bg-white px-4 py-2.5 shadow-card">
        <div className="flex items-center gap-3">
          <span aria-hidden className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-success/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <div
            className={`flex-1 text-[13px] leading-snug transition-opacity duration-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-semibold text-ink">{current.text}</span>
            <span className="ml-1 text-faint">· {current.ago}</span>
          </div>
        </div>
        {hasSeed && (
          <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-faint">
            Demo activity, real Stripe data soon
          </div>
        )}
      </div>
    </div>
  );
}
