'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Slider, Select } from '@/components/ui/Input';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';

interface InputDef {
  id: string;
  label: string;
  type: 'slider' | 'select';
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  format?: (n: number) => string;
}

interface Props {
  inputs: InputDef[];
  initialValues: Record<string, number | string>;
  compute: (values: Record<string, number | string>) => { label: string; value: ReactNode; accent?: string }[];
  notes?: string[];
  sources?: { label: string; href: string }[];
  /** Renders a NewsletterCapture under the results, tagged with this source. */
  captureSource?: string;
  captureCta?: string;
}

export function SimpleCalculator({ inputs, initialValues, compute, notes, sources, captureSource, captureCta }: Props) {
  const [values, setValues] = useState<Record<string, number | string>>(initialValues);
  const results = useMemo(() => compute(values), [values, compute]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <Card variant="bordered">
        <CardBody className="flex flex-col gap-5">
          {inputs.map((i) => {
            const v = values[i.id];
            if (i.type === 'slider') {
              return (
                <Slider
                  key={i.id}
                  label={i.label}
                  min={i.min}
                  max={i.max}
                  step={i.step ?? 1}
                  value={typeof v === 'number' ? v : 0}
                  onChange={(e) => setValues({ ...values, [i.id]: Number(e.target.value) })}
                  valueDisplay={
                    <span className="font-semibold">
                      {i.format ? i.format(Number(v)) : v}
                    </span>
                  }
                />
              );
            }
            return (
              <Select
                key={i.id}
                label={i.label}
                options={i.options ?? []}
                value={String(v)}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setValues({ ...values, [i.id]: e.target.value })
                }
              />
            );
          })}
        </CardBody>
      </Card>

      <Card variant="elevated">
        <CardBody className="flex flex-col gap-4">
          {results.map((r, i) => (
            <div key={i} className="flex items-baseline justify-between border-b border-border pb-3 last:border-0">
              <div className="text-sm font-semibold text-muted">{r.label}</div>
              <div
                className="display text-2xl font-semibold leading-none tracking-tightest"
                style={{ color: r.accent ?? '#0F1827' }}
              >
                {r.value}
              </div>
            </div>
          ))}

          {notes && notes.length > 0 && (
            <div className="mt-2 rounded-card bg-surface p-3 text-xs text-muted">
              <div className="font-semibold text-ink">Assumptions</div>
              <ul className="mt-1 list-disc pl-4">
                {notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
          )}
          {captureSource && (
            <div className="rounded-card border border-border bg-white p-4">
              <div className="text-sm font-semibold text-ink">Email yourself these results</div>
              <p className="mt-1 text-xs text-muted">
                Plus the 2026 figures behind them, and updates when thresholds change.
              </p>
              <div className="mt-3">
                <NewsletterCapture source={captureSource} cta={captureCta ?? 'Send my numbers'} />
              </div>
            </div>
          )}
          {sources && sources.length > 0 && (
            <div className="rounded-card bg-surface p-3 text-xs">
              <div className="font-semibold text-ink">Sources</div>
              <ul className="mt-1 list-disc pl-4">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="nofollow noopener noreferrer" className="underline-offset-2 hover:underline">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
