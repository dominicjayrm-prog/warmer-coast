'use client';

import { useState, useTransition } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';
import type { Country } from '@/lib/site';
import type { ChecklistItem } from '@/lib/playbook-modules';

interface Props {
  country: Country;
  moduleNumber: number;
  items: ChecklistItem[];
  initialCompleted: string[];
  accent: string;
}

export function ModuleChecklist({
  country,
  moduleNumber,
  items,
  initialCompleted,
  accent,
}: Props) {
  const [completed, setCompleted] = useState<Set<string>>(new Set(initialCompleted));
  const [, startTransition] = useTransition();

  async function toggle(id: string) {
    const next = new Set(completed);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompleted(next);

    startTransition(async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        await supabase.from('wc_user_checklist').upsert(
          {
            user_id: user.id,
            country,
            module_number: moduleNumber,
            item_id: id,
            completed: next.has(id),
            completed_at: next.has(id) ? new Date().toISOString() : null,
          },
          { onConflict: 'user_id,country,module_number,item_id' },
        );

        if (next.size === items.length) {
          await supabase.from('wc_user_progress').upsert(
            {
              user_id: user.id,
              country,
              module_number: moduleNumber,
              completed: true,
              completed_at: new Date().toISOString(),
            },
            { onConflict: 'user_id,country,module_number' },
          );
        }
      } catch (e) {
        console.error('checklist save failed', e);
      }
    });
  }

  const pct = items.length > 0 ? Math.round((completed.size / items.length) * 100) : 0;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs font-semibold text-muted">
        <span>{completed.size} of {items.length} done</span>
        <span>{pct}%</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-pill bg-border/60">
        <div
          className="h-full rounded-pill transition-all duration-500"
          style={{ width: `${pct}%`, background: accent }}
        />
      </div>
      <ul className="mt-5 flex flex-col gap-2">
        {items.map((item) => {
          const done = completed.has(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-start gap-3 rounded-card border border-border bg-white p-4 text-left transition-all hover:border-ink/40"
                aria-pressed={done}
              >
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                    done ? 'text-white' : 'border-border bg-white'
                  }`}
                  style={done ? { background: accent, borderColor: accent } : undefined}
                  aria-hidden
                >
                  {done && '✓'}
                </span>
                <span className="flex-1">
                  <span className={`block text-[15px] font-semibold ${done ? 'text-faint line-through' : 'text-ink'}`}>
                    {item.label}
                  </span>
                  {item.detail && <span className="block text-sm text-muted">{item.detail}</span>}
                  {item.deadline && (
                    <span className="mt-1 inline-block rounded-pill bg-warm-glow px-2 py-0.5 text-[11px] font-semibold text-warm">
                      {item.deadline}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
