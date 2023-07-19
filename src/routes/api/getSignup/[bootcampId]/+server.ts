import { json, error } from '@sveltejs/kit';
import { env as PrivateEnv } from '$env/dynamic/private';
import { env as PublicEnv } from '$env/dynamic/public';
import { createClient } from '@supabase/supabase-js';

const academySupabase = createClient(
	PublicEnv.PUBLIC_ACADEMY_SUPABASE_URL,
	PrivateEnv.SUPABASE_ACADEMY_SERVICE_KEY
);

export const GET = async ({ params }) => {
	try {
		const { data } = await academySupabase
			.from('signups')
			.select('wallet_address')
			.eq('bootcamp_id', params.bootcampId);
		const signUps = data?.map((ele) => ele.wallet_address);
		return json(signUps);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
