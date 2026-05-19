import { cn } from '@/lib/cn';

interface Props {
  value: number;
  max?: number;
  label?: string;
  accent?: string;
  showValue?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function Progress({
  value,
  max = 100,
  label,
  accent = '#E67E3C',
  showValue,
  size = 'md',
  className,
}: Props) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs font-semibold text-muted">
          {label && <span>{label}</span>}
          {showValue && <span>{Math.round(pct)}%</span>}
        </div>
      )}
      <div
        className={cn(
          'w-full overflow-hidden rounded-pill bg-border/60',
          size === 'sm' ? 'h-1.5' : 'h-2',
        )}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
      >
        <div
          className="h-full rounded-pill transition-all duration-500"
          style={{ width: `${pct}%`, background: accent }}
        />
      </div>
    </div>
  );
}
