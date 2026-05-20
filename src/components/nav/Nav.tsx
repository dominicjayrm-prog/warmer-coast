'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

const playbooks = [
  { href: '/playbook/spain', label: 'Move to Spain', sub: '£397' },
  { href: '/playbook/portugal', label: 'Move to Portugal', sub: '£397' },
  { href: '/playbook/gibraltar', label: 'Move to Gibraltar', sub: '£497' },
];

const tools = [
  { href: '/calculators/beckham-law', label: 'Beckham Law calculator' },
  { href: '/calculators/cost-of-living', label: 'Cost of living comparator' },
  { href: '/calculators/compare-countries', label: 'Spain vs Portugal vs Gibraltar' },
  { href: '/calculators/visa-eligibility', label: 'Visa eligibility quiz' },
  { href: '/quiz', label: 'Should you move abroad? (quiz)' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openPanel, setOpenPanel] = useState<'playbooks' | 'tools' | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav border-b border-border' : 'bg-white/60',
      )}
    >
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight" aria-label="WarmerCoast home">
          <span
            aria-hidden
            className="relative inline-flex h-7 w-7 items-center justify-center rounded-pill bg-gradient-to-br from-warm-light to-warm shadow-sm"
          >
            <span className="absolute inset-1 rounded-pill bg-white/30" />
          </span>
          <span className="display text-[19px] font-semibold tracking-tightest text-ink">
            warmer<span className="italic text-warm">coast</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[14px] font-medium text-ink/80">
          <DropdownTrigger
            label="Playbooks"
            isOpen={openPanel === 'playbooks'}
            onToggle={() => setOpenPanel(openPanel === 'playbooks' ? null : 'playbooks')}
          >
            <DropdownPanel>
              <div className="grid gap-1">
                {playbooks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center justify-between rounded-card px-4 py-3 hover:bg-surface"
                    onClick={() => setOpenPanel(null)}
                  >
                    <span className="font-semibold text-ink">{p.label}</span>
                    <span className="text-xs font-semibold text-warm">{p.sub}</span>
                  </Link>
                ))}
              </div>
            </DropdownPanel>
          </DropdownTrigger>

          <Link href="/spain" className="px-3 py-2 hover:text-ink">Spain</Link>
          <Link href="/portugal" className="px-3 py-2 hover:text-ink">Portugal</Link>
          <Link href="/gibraltar" className="px-3 py-2 hover:text-ink">Gibraltar</Link>

          <DropdownTrigger
            label="Free tools"
            isOpen={openPanel === 'tools'}
            onToggle={() => setOpenPanel(openPanel === 'tools' ? null : 'tools')}
          >
            <DropdownPanel>
              <div className="grid gap-1">
                {tools.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="rounded-card px-4 py-2.5 hover:bg-surface"
                    onClick={() => setOpenPanel(null)}
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </DropdownPanel>
          </DropdownTrigger>

          <Link href="/blog" className="px-3 py-2 hover:text-ink">Blog</Link>
          <Link href="/about" className="px-3 py-2 hover:text-ink">About</Link>
          <Link href="/reviews" className="px-3 py-2 hover:text-ink">Reviews</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-pill px-4 py-2 text-[14px] font-semibold text-ink/80 hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-[14px] font-semibold text-white shadow-card transition-all hover:shadow-elevated hover:-translate-y-px"
          >
            Find your playbook
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border text-ink"
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn('block h-[2px] w-5 bg-ink transition-transform', openMobile && 'translate-y-[7px] rotate-45')} />
            <span className={cn('block h-[2px] w-5 bg-ink transition-opacity', openMobile && 'opacity-0')} />
            <span className={cn('block h-[2px] w-5 bg-ink transition-transform', openMobile && '-translate-y-[7px] -rotate-45')} />
          </span>
        </button>
      </div>

      {openMobile && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-content flex flex-col gap-2 py-5">
            <MobileSection title="Playbooks">
              {playbooks.map((p) => (
                <Link key={p.href} href={p.href} className="flex items-center justify-between py-2" onClick={() => setOpenMobile(false)}>
                  <span className="font-semibold">{p.label}</span>
                  <span className="text-xs font-semibold text-warm">{p.sub}</span>
                </Link>
              ))}
            </MobileSection>
            <MobileSection title="Countries">
              {['spain', 'portugal', 'gibraltar'].map((c) => (
                <Link key={c} href={`/${c}`} className="block py-2 capitalize font-semibold" onClick={() => setOpenMobile(false)}>
                  {c}
                </Link>
              ))}
            </MobileSection>
            <MobileSection title="Free tools">
              {tools.map((t) => (
                <Link key={t.href} href={t.href} className="block py-2" onClick={() => setOpenMobile(false)}>
                  {t.label}
                </Link>
              ))}
            </MobileSection>
            <MobileSection title="More">
              <Link href="/blog" className="block py-2 font-semibold" onClick={() => setOpenMobile(false)}>Blog</Link>
              <Link href="/about" className="block py-2 font-semibold" onClick={() => setOpenMobile(false)}>About</Link>
              <Link href="/reviews" className="block py-2 font-semibold" onClick={() => setOpenMobile(false)}>Reviews</Link>
              <Link href="/login" className="block py-2 font-semibold" onClick={() => setOpenMobile(false)}>Log in</Link>
            </MobileSection>
            <Link
              href="/quiz"
              onClick={() => setOpenMobile(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3 font-semibold text-white"
            >
              Find your playbook →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownTrigger({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'inline-flex items-center gap-1 rounded-pill px-3 py-2 hover:text-ink',
          isOpen && 'text-ink',
        )}
      >
        {label}
        <span aria-hidden className={cn('transition-transform', isOpen && 'rotate-180')}>⌄</span>
      </button>
      {isOpen && children}
    </div>
  );
}

function DropdownPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-[calc(100%+8px)] w-[320px] rounded-card border border-border bg-white p-2 shadow-elevated animate-fade-up">
      {children}
    </div>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border first:border-t-0 py-3">
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">{title}</div>
      <div className="mt-1 flex flex-col">{children}</div>
    </div>
  );
}
