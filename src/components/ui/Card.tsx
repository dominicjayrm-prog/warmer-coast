import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'default' | 'elevated' | 'bordered' | 'glass';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  interactive?: boolean;
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-white border border-border',
  elevated: 'bg-white shadow-card',
  bordered: 'bg-white border border-border',
  glass: 'bg-white/80 backdrop-blur border border-border',
};

export const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { className, variant = 'default', interactive, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-card overflow-hidden',
        variantClasses[variant],
        interactive && 'transition-all duration-200 hover:-translate-y-px hover:shadow-elevated cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

export function CardBody({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-7', className)} {...rest} />;
}

export function CardHeader({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-7 pb-2', className)} {...rest} />;
}
