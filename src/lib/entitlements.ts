import { createClient } from '@/lib/supabase/server';
import type { Country } from '@/lib/site';
import { isAdminEmail } from '@/lib/admin';

export interface Entitlements {
  ownedCountries: Set<Country>;
  isAdmin: boolean;
}

/**
 * Which playbooks the current user has access to.
 *
 * Rules:
 *  - A single-country purchase grants that country.
 *  - Refunded purchases do not count.
 *  - Admin emails (ADMIN_EMAILS env) get full access for testing.
 */
export async function getEntitlements(): Promise<Entitlements | null> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  if (isAdminEmail(user.email)) {
    return {
      ownedCountries: new Set<Country>(['spain', 'portugal', 'gibraltar']),
      isAdmin: true,
    };
  }

  const { data } = await supabase
    .from('wc_purchases')
    .select('product_slug,status')
    .eq('user_id', user.id);

  const owned = new Set<Country>();
  ((data as { product_slug: string; status: string }[] | null) ?? []).forEach((p) => {
    if (p.status !== 'completed') return;
    if (p.product_slug === 'spain' || p.product_slug === 'portugal' || p.product_slug === 'gibraltar') {
      owned.add(p.product_slug as Country);
    }
  });

  return { ownedCountries: owned, isAdmin: false };
}

export function hasAccess(ent: Entitlements | null, country: Country): boolean {
  if (!ent) return false;
  if (ent.isAdmin) return true;
  return ent.ownedCountries.has(country);
}
