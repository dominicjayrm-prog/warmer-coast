import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'The Portugal Playbook for British movers — D7, NHR 2.0 (IFICI), banking, tax. £397.';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'portugal',
    eyebrow: 'The Portugal Playbook · £397',
    headline: 'Move to Portugal with NHR 2.0, the D7, and tax structuring that actually works.',
    tag: 'Get the playbook →',
  });
}
