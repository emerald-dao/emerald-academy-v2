import type { RequestHandler } from './$types';
import { fetchAllCadenceByExampleOverviews } from '$lib/utilities/api/content/cadenceByExample/fetchAllCadenceByExampleOverviews';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const allMetadata = await fetchAllCadenceByExampleOverviews(params.lang);

		return json(allMetadata);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
