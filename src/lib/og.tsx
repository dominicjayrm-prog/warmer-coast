import { ImageResponse } from 'next/og';
import { COUNTRY_META, type Country } from '@/lib/site';

export const ogSize = { width: 1200, height: 630 };

interface VersusOgOpts {
  a: Country;
  b: Country;
  /** Optional one-liner verdict shown beneath the headline. */
  verdict?: string;
}

export function versusOgImage({ a, b, verdict }: VersusOgOpts) {
  const ma = COUNTRY_META[a];
  const mb = COUNTRY_META[b];
  const headline = `${ma.name} vs ${mb.name}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          background: `linear-gradient(135deg, ${ma.accentSoft} 0%, #FFFFFF 50%, ${mb.accentSoft} 100%)`,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#0F1B2D',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '22px',
                letterSpacing: '-0.04em',
              }}
            >
              W
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0F1B2D',
                letterSpacing: '-0.02em',
              }}
            >
              WarmerCoast
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              padding: '10px 20px',
              borderRadius: '999px',
              background: '#0F1B2D',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.06em',
            }}
          >
            2026 · COMPARISON
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', fontSize: '120px' }}>{ma.flag}</div>
            <div
              style={{
                display: 'flex',
                fontSize: '40px',
                fontWeight: 700,
                color: ma.accent,
                letterSpacing: '-0.02em',
              }}
            >
              {ma.name}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '90px',
                fontWeight: 800,
                color: '#0F1B2D',
                letterSpacing: '-0.05em',
                lineHeight: 0.9,
              }}
            >
              vs
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '16px',
                color: '#3D4A5F',
                letterSpacing: '0.1em',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              for British movers
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', fontSize: '120px' }}>{mb.flag}</div>
            <div
              style={{
                display: 'flex',
                fontSize: '40px',
                fontWeight: 700,
                color: mb.accent,
                letterSpacing: '-0.02em',
              }}
            >
              {mb.name}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '34px',
              fontWeight: 700,
              color: '#0F1B2D',
              letterSpacing: '-0.025em',
            }}
          >
            {headline} — the sourced verdict
          </div>
          {verdict && (
            <div
              style={{
                display: 'flex',
                fontSize: '20px',
                color: '#3D4A5F',
                maxWidth: '900px',
                lineHeight: 1.3,
              }}
            >
              {verdict}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

interface CountryOgOpts {
  country: Country;
  eyebrow: string;
  headline: string;
  /** Optional small tag bottom-right. */
  tag?: string;
}

export function countryOgImage({ country, eyebrow, headline, tag }: CountryOgOpts) {
  const meta = COUNTRY_META[country];
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: `linear-gradient(135deg, ${meta.accentSoft} 0%, #FFFFFF 100%)`,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#0F1B2D',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '22px',
                letterSpacing: '-0.04em',
              }}
            >
              W
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0F1B2D',
                letterSpacing: '-0.02em',
              }}
            >
              WarmerCoast
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 18px',
              borderRadius: '999px',
              background: meta.accent,
              color: 'white',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ display: 'flex' }}>{meta.flag}</span>
            <span style={{ display: 'flex' }}>{meta.name}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: meta.accent,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '68px',
              fontWeight: 700,
              color: '#0F1B2D',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              maxWidth: '1000px',
            }}
          >
            {headline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '20px',
            color: '#0F1B2D',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#4A5568' }}>
            <span style={{ display: 'flex' }}>Sourced</span>
            <span style={{ display: 'flex' }}>·</span>
            <span style={{ display: 'flex' }}>Sequenced</span>
            <span style={{ display: 'flex' }}>·</span>
            <span style={{ display: 'flex' }}>2026 verified</span>
          </div>
          <div style={{ display: 'flex', color: meta.accent }}>{tag ?? 'warmercoast.com →'}</div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
