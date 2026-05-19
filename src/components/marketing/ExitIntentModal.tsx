'use client';

import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'wc_exit_intent_shown';
const HIDDEN_PATHS = ['/checkout', '/login', '/app', '/account'];

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (HIDDEN_PATHS.some((p) => pathname?.startsWith(p))) return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const handler = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 4 && e.relatedTarget === null) {
        triggered = true;
        sessionStorage.setItem(STORAGE_KEY, '1');
        setOpen(true);
      }
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
  }, [pathname]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Before you go"
      description="Free 14-page Spain Relocation Starter Checklist. The exact pre-move list we wish we had."
    >
      <ul className="mb-4 grid gap-2 text-sm text-muted">
        <li className="flex gap-2"><span className="text-warm">✓</span> Visa documents printable list</li>
        <li className="flex gap-2"><span className="text-warm">✓</span> Pre-move UK tax actions (Form P85, ISA timing)</li>
        <li className="flex gap-2"><span className="text-warm">✓</span> NIE, padrón, healthcare sequence</li>
      </ul>
      <NewsletterCapture source="exit_intent" cta="Send the checklist" />
      <p className="mt-3 text-xs text-faint">
        No spam, one email per fortnight, unsubscribe in one click.
      </p>
    </Modal>
  );
}
