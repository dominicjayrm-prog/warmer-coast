import { versusOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Spain vs Gibraltar for British movers in 2026 — Beckham Law vs Category 2';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return versusOgImage({
    a: 'spain',
    b: 'gibraltar',
    verdict: 'Beckham (Spain) wins below ~£180k. Cat 2 (Gibraltar) wins above ~£200k with £2m+ net worth.',
  });
}
