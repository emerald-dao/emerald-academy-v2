import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { env as PrivateEnv } from '$env/dynamic/private';
import { env as PublicEnv } from '$env/dynamic/public';
import type { RequestHandler } from './$types';

const academySupabase = createClient(PublicEnv.PUBLIC_ACADEMY_SUPABASE_URL, PrivateEnv.SUPABASE_ACADEMY_SERVICE_KEY);

export async function POST({ request }: { request: RequestHandler }) {
	const { signupData } = await request.json();

	const { error } = await academySupabase.from('signups').insert({
		name: signupData.name,
		email: signupData.email,
		experience: signupData.codingExperience,
		product: signupData.product,
		wallet_address: signupData.walletAddress,
    discord: signupData.discordHandle,
		bootcamp_id: signupData.bootcamp_id
	});
	console.log('Error signing up', error);

	return json({ error });
}