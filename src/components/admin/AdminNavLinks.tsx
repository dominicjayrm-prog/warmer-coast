'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

const links = [
  { href: '/admin', label: 'Dashboard', exact: true },
  { href: '/admin/blog', label: 'Blog' },
  { href: '/admin/leads', label: 'Leads' },
  { href: '/admin/testimonials', label: 'Reviews' },
  { href: '/admin/activity', label: 'Activity' },
  { href: '/admin/purchases', label: 'Purchases' },
];

export function AdminNavLinks() {
  const path = usePathname() ?? '';
  return (
    <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium">
      {links.map((l) => {
        const active = l.exact ? path === l.href : path.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              'rounded-pill px-3 py-1.5 transition-colors',
              active ? 'bg-ink text-white' : 'text-muted hover:text-ink',
            )}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
