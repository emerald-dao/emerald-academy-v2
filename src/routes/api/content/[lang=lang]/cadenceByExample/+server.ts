import type { RequestHandler } from './$types';
import { fetchAllCadenceByExampleMetadata } from '$lib/utilities/api/content/cadenceByExample/fetchAllCadenceByExampleMetadata';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const allMetadata = await fetchAllCadenceByExampleMetadata(params.lang);

	return json(allMetadata);
};
