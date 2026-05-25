import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Move to Portugal from the UK — D7, D8, IFICI (NHR 2.0), sourced 2026 playbook';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'portugal',
    eyebrow: 'Portugal · 2026 sourced',
    headline: 'Move to Portugal with NHR 2.0, D7, and tax structuring that works.',
    tag: 'warmercoast.com/portugal →',
  });
}
