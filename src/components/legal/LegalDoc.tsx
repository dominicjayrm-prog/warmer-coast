import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';

interface Section {
  title: string;
  body: ReactNode;
}

export function LegalDoc({
  eyebrow,
  title,
  intro,
  sections,
  updated,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  updated: string;
}) {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <Badge tone="neutral" uppercase>{eyebrow}</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          {title}
        </h1>
        <p className="mt-3 text-muted">{intro}</p>
        <p className="mt-1 text-xs text-faint">Last updated: {updated}</p>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="display text-2xl font-semibold tracking-tight text-ink">{s.title}</h2>
              <div className="mt-3 flex flex-col gap-3 text-[16px] leading-relaxed text-ink/90">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
