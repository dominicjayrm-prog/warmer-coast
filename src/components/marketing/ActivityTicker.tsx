import { createClient } from '@/lib/supabase/server';
import { ActivityTickerClient } from './ActivityTickerClient';

export const revalidate = 60;

type ActivityRow = {
  id: string;
  event_type: string;
  product_slug: string | null;
  anonymised_name: string | null;
  is_seed: boolean;
  created_at: string;
};

export async function ActivityTicker() {
  let activity: ActivityRow[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('wc_activity_log')
      .select('id,event_type,product_slug,anonymised_name,is_seed,created_at')
      .order('created_at', { ascending: false })
      .limit(20);
    activity = (data as ActivityRow[]) ?? [];
  } catch {
    // Supabase unavailable, ticker will not render.
  }

  if (activity.length === 0) return null;

  const items = activity.map((row) => ({
    id: row.id,
    text: formatActivity(row),
    isSeed: row.is_seed,
    ago: timeAgo(new Date(row.created_at)),
  }));

  return <ActivityTickerClient items={items} />;
}

function formatActivity(row: ActivityRow): string {
  const name = row.anonymised_name ?? 'Someone';
  const productLabel: Record<string, string> = {
    spain: 'the Spain playbook',
    portugal: 'the Portugal playbook',
    gibraltar: 'the Gibraltar playbook',
    bundle: 'the full bundle',
  };
  const product = row.product_slug ? productLabel[row.product_slug] ?? 'a playbook' : '';
  switch (row.event_type) {
    case 'purchase':
      return `${name} just got ${product}`;
    case 'review':
      return `${name} left a 5-star review`;
    case 'completion':
      return `${name} finished a module`;
    case 'signup':
      return `${name} joined the newsletter`;
    default:
      return name;
  }
}

function timeAgo(date: Date): string {
  const diff = (Date.now() - date.getTime()) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}
