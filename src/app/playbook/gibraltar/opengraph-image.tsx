import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'The Gibraltar Playbook for British movers — Cat 2, HEPSS, frontier worker. £497.';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'gibraltar',
    eyebrow: 'The Gibraltar Playbook · £497',
    headline: 'The Cat 2 route, frontier-worker reality, and crossing into Spain in 2026.',
    tag: 'Get the playbook →',
  });
}
