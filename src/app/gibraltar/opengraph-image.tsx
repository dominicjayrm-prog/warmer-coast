import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Move to Gibraltar from the UK — Category 2, HEPSS, frontier-worker, sourced 2026 playbook';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'gibraltar',
    eyebrow: 'Gibraltar · 2026 sourced',
    headline: 'The Cat 2 route, frontier-worker reality, and crossing into Spain.',
    tag: 'warmercoast.com/gibraltar →',
  });
}
