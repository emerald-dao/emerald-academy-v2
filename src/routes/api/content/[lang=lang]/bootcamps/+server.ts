import type { RequestHandler } from './$types';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang);

		return json(allBootcamps);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
