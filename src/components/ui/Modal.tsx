'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, description, children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const focusable = ref.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/40 backdrop-blur-sm p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative w-full max-w-lg rounded-card bg-white shadow-elevated animate-fade-up',
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-pill text-muted hover:bg-surface hover:text-ink"
        >
          <span aria-hidden>×</span>
        </button>
        {(title || description) && (
          <div className="px-6 pt-7 pb-3">
            {title && (
              <h2 className="display text-2xl font-semibold tracking-tight text-ink">{title}</h2>
            )}
            {description && <p className="mt-2 text-sm text-muted">{description}</p>}
          </div>
        )}
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
}
