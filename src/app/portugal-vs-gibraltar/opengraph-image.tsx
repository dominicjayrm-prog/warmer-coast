import { versusOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Portugal vs Gibraltar for British movers in 2026 — IFICI vs Category 2';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return versusOgImage({
    a: 'portugal',
    b: 'gibraltar',
    verdict: 'Portugal wins for retirees, EU citizenship, ordinary movers. Gibraltar wins for £200k+ income with £2m+ net worth.',
  });
}
