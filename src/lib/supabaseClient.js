import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

export const botSupabase = createClient(env.PUBLIC_BOT_SUPABASE_URL, env.PUBLIC_BOT_SUPABASE_ANON_KEY);
export const academySupabase = createClient(env.PUBLIC_ACADEMY_SUPABASE_URL, env.PUBLIC_ACADEMY_SUPABASE_ANON_KEY);