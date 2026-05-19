import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'warm';
type Size = 'sm' | 'md' | 'lg';

interface Props extends Omit<ComponentProps<typeof Link>, 'children'> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-night-deep shadow-card hover:shadow-elevated',
  secondary: 'bg-white text-ink border border-border hover:border-ink hover:-translate-y-px',
  ghost: 'bg-transparent text-ink hover:bg-surface',
  warm: 'bg-warm text-white hover:bg-warm/90 shadow-glow hover:shadow-elevated',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

export function LinkButton({
  className,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  children,
  ...rest
}: Props) {
  return (
    <Link
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-all duration-200 select-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Link>
  );
}
