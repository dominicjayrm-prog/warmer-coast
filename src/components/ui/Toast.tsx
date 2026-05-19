'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ToastEntry {
  id: number;
  message: string;
  tone: 'default' | 'success' | 'error';
}

const ToastContext = createContext<{
  push: (message: string, tone?: ToastEntry['tone']) => void;
} | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const push = useCallback((message: string, tone: ToastEntry['tone'] = 'default') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-4 right-4 z-[110] flex flex-col gap-2"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              'pointer-events-auto rounded-card px-5 py-3 text-sm font-semibold shadow-elevated animate-fade-up',
              t.tone === 'success' && 'bg-success text-white',
              t.tone === 'error' && 'bg-gibraltar text-white',
              t.tone === 'default' && 'bg-ink text-white',
            )}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
}

export function Toast({ message, tone }: { message: string; tone?: ToastEntry['tone'] }) {
  const { push } = useToast();
  useEffect(() => {
    if (message) push(message, tone);
  }, [message, tone, push]);
  return null;
}
