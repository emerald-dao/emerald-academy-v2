import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { env as PrivateEnv } from '$env/dynamic/private';
import { env as PublicEnv } from '$env/dynamic/public';
import type { RequestHandler } from './$types';
import { verifyAccountOwnership } from '$flow/utils';

const academySupabase = createClient(PublicEnv.PUBLIC_ACADEMY_SUPABASE_URL, PrivateEnv.SUPABASE_ACADEMY_SERVICE_KEY);

export async function POST({ request }: { request: RequestHandler }) {
	const { user, course_id } = await request.json();

  const verifyAccount = await verifyAccountOwnership(user);
	if (!verifyAccount) {
		return json({});
	}

	const { error } = await academySupabase.from('stars').insert({
		wallet_address: user.addr,
    course_id
	});
	console.log('Error giving star', error);

	return json({ error });
}