export const SITE = {
  name: 'WarmerCoast',
  domain: 'warmercoast.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://warmercoast.com',
  siteKey: process.env.WARMERCOAST_SITE_KEY || 'warmercoast.com',
  founder: 'Dominic Roworth',
  description:
    'Practical relocation playbooks for British adults moving to Spain, Portugal, or Gibraltar. Tax, visas, banking, schools, the whole move planned.',
  defaultOgImage: '/og/default.png',
  socials: {
    instagram: 'https://instagram.com/warmercoast',
    youtube: 'https://youtube.com/@warmercoast',
  },
} as const;

export const COUNTRIES = ['spain', 'portugal', 'gibraltar'] as const;
export type Country = (typeof COUNTRIES)[number];

export const COUNTRY_META: Record<
  Country,
  {
    name: string;
    accent: string;
    accentSoft: string;
    flag: string;
    headline: string;
    price: number;
    blurb: string;
  }
> = {
  spain: {
    name: 'Spain',
    accent: '#E67E3C',
    accentSoft: '#FFE9D5',
    flag: '🇪🇸',
    headline: 'Move to Spain without the tax mistakes that cost most expats £20k+',
    price: 397,
    blurb:
      'Beckham Law, non-lucrative visas, modelo 720, padrón, NIE. The full playbook for British adults moving to the Costa del Sol, Valencia, Barcelona, or the islands.',
  },
  portugal: {
    name: 'Portugal',
    accent: '#2E8585',
    accentSoft: '#D7ECEA',
    flag: '🇵🇹',
    headline: 'Move to Portugal with NHR 2.0, the D7, and tax structuring that actually works',
    price: 397,
    blurb:
      'D7 vs D8 vs Golden Visa, NHR 2.0 successor scheme, IRS basics, healthcare, schooling, banking. Everything you wish you knew before the Algarve.',
  },
  gibraltar: {
    name: 'Gibraltar',
    accent: '#9C3848',
    accentSoft: '#F4DCE0',
    flag: '🇬🇮',
    headline: 'The Gibraltar Cat 2 route, frontier-worker reality, and crossing into Spain',
    price: 497,
    blurb:
      'Cat 2 residency, HEPSS, frontier-worker mechanics, banking in a finance hub, schools, the post-Brexit Spain frontier. Premium, narrow market, deep playbook.',
  },
};

export const PRODUCTS = {
  spain: { slug: 'spain', name: 'Spain Playbook', price: 397, currency: 'GBP' },
  portugal: { slug: 'portugal', name: 'Portugal Playbook', price: 397, currency: 'GBP' },
  gibraltar: { slug: 'gibraltar', name: 'Gibraltar Playbook', price: 497, currency: 'GBP' },
} as const;

export type ProductSlug = keyof typeof PRODUCTS;
