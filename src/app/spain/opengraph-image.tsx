import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'Move to Spain from the UK — Beckham Law, NLV, DNV, Modelo 720, sourced 2026 playbook';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'spain',
    eyebrow: 'Spain · 2026 sourced',
    headline: 'Move to Spain without the costly tax mistakes.',
    tag: 'warmercoast.com/spain →',
  });
}
