'use client';

import Script from 'next/script';

export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.outbound-links.js"
          strategy="afterInteractive"
        />
      )}
      {clarityId && (
        <Script id="clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}</Script>
      )}
    </>
  );
}

export function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const plausible = (window as unknown as { plausible?: (n: string, o?: { props?: Record<string, unknown> }) => void }).plausible;
  if (plausible) plausible(name, { props });
}
