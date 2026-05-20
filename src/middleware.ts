import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Only run auth refresh on routes that actually need it. Keeping the matcher
// narrow means a middleware crash can never take down the marketing site.
export const config = {
  matcher: ['/app/:path*', '/account/:path*', '/admin/:path*'],
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request: { headers: request.headers } });
  const path = request.nextUrl.pathname;
  const isProtected =
    path.startsWith('/app') || path.startsWith('/account') || path.startsWith('/admin');

  if (!isProtected) return response;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('next', path);
    return NextResponse.redirect(redirectUrl);
  }

  try {
    const supabase = createServerClient(url, key, {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({ name, value: '', ...options });
        },
      },
    });

    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      const redirectUrl = new URL('/login', request.url);
      redirectUrl.searchParams.set('next', path);
      return NextResponse.redirect(redirectUrl);
    }

    if (path.startsWith('/admin')) {
      const allow = (process.env.ADMIN_EMAILS ?? '')
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);
      if (!allow.includes((data.user.email ?? '').toLowerCase())) {
        return NextResponse.redirect(new URL('/?error=unauthorized', request.url));
      }
    }
  } catch (e) {
    console.error('middleware auth failure', e);
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('next', path);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}
