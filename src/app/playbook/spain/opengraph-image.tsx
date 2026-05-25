import { countryOgImage, ogSize } from '@/lib/og';

export const runtime = 'edge';
export const alt = 'The Spain Playbook for British movers — Beckham Law, visas, banking, tax. £397.';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  return countryOgImage({
    country: 'spain',
    eyebrow: 'The Spain Playbook · £397',
    headline: 'Move to Spain without the £20k+ tax mistakes most expats make.',
    tag: 'Get the playbook →',
  });
}
