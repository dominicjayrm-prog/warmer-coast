import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'warm' | 'sea' | 'gibraltar' | 'success' | 'warning' | 'dark';

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-surface text-muted border border-border',
  warm: 'bg-warm/10 text-warm border border-warm/30',
  sea: 'bg-sea/10 text-sea border border-sea/30',
  gibraltar: 'bg-gibraltar/10 text-gibraltar border border-gibraltar/30',
  success: 'bg-success/10 text-success border border-success/30',
  warning: 'bg-warning/10 text-warning border border-warning/30',
  dark: 'bg-ink text-white border border-ink',
};

interface Props extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  icon?: ReactNode;
  uppercase?: boolean;
}

export function Badge({ className, tone = 'neutral', icon, uppercase, children, ...rest }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold',
        uppercase && 'uppercase tracking-[0.08em] text-[11px]',
        toneClasses[tone],
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
