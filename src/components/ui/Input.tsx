import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, iconLeft, iconRight, className, id: idProp, ...rest },
  ref,
) {
  const reactId = useId();
  const id = idProp || reactId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted">
            {iconLeft}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-card border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-faint transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-warm/30 focus:border-warm',
            error ? 'border-gibraltar' : 'border-border hover:border-ink/40',
            iconLeft && 'pl-10',
            iconRight && 'pr-10',
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={hint || error ? `${id}-desc` : undefined}
          {...rest}
        />
        {iconRight && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
            {iconRight}
          </span>
        )}
      </div>
      {(hint || error) && (
        <p
          id={`${id}-desc`}
          className={cn('text-xs', error ? 'text-gibraltar' : 'text-muted')}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
});

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  valueDisplay?: ReactNode;
  accent?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { label, valueDisplay, accent = '#E67E3C', className, id: idProp, ...rest },
  ref,
) {
  const reactId = useId();
  const id = idProp || reactId;
  return (
    <div className="flex flex-col gap-2">
      {(label || valueDisplay) && (
        <div className="flex items-baseline justify-between">
          {label && (
            <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {label}
            </label>
          )}
          {valueDisplay && <div className="text-base font-semibold text-ink">{valueDisplay}</div>}
        </div>
      )}
      <input
        ref={ref}
        id={id}
        type="range"
        className={cn('wc-slider w-full', className)}
        style={
          {
            '--accent': accent,
            // Progress fill: gradient from accent to track-bg at the
            // current value position. Computed at render via inline style.
            ['--pct' as string]: `${
              ((Number(rest.value ?? rest.defaultValue ?? rest.min ?? 0) - Number(rest.min ?? 0)) /
                Math.max(1, Number(rest.max ?? 100) - Number(rest.min ?? 0))) *
              100
            }%`,
          } as React.CSSProperties
        }
        {...rest}
      />
    </div>
  );
});

interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, className, id: idProp, ...rest },
  ref,
) {
  const reactId = useId();
  const id = idProp || reactId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
      )}
      <select
        ref={ref as never}
        id={id}
        className={cn(
          'w-full rounded-card border border-border bg-white px-4 py-3 text-[15px] text-ink',
          'focus:outline-none focus:ring-2 focus:ring-warm/30 focus:border-warm',
          className,
        )}
        {...(rest as Record<string, unknown>)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
});
