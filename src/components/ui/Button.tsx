import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'warm';
type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink text-white hover:bg-night-deep active:bg-night-deep shadow-card hover:shadow-elevated',
  secondary:
    'bg-white text-ink border border-border hover:border-ink hover:-translate-y-px',
  ghost: 'bg-transparent text-ink hover:bg-surface',
  warm:
    'bg-warm text-white hover:bg-warm/90 shadow-glow hover:shadow-elevated',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    loading,
    iconLeft,
    iconRight,
    fullWidth,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        iconLeft
      )}
      <span>{children}</span>
      {!loading && iconRight}
    </button>
  );
});
