import type { RequestHandler } from './$types';
import { fetchAllCadenceByExampleMetadata } from '$lib/utilities/api/content/cadenceByExample/fetchAllCadenceByExampleMetadata';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const allMetadata = await fetchAllCadenceByExampleMetadata(params.lang);

		return json(allMetadata);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
