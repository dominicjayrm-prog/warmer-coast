import { versusOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Spain vs Portugal for British movers in 2026 — tax, visa, cost compared';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return versusOgImage({
    a: 'spain',
    b: 'portugal',
    verdict: 'Spain wins for £80k+ employees (Beckham). Portugal wins for retirees, HNW, and faster EU citizenship.',
  });
}
