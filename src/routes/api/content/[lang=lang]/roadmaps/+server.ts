import type { RequestHandler } from '../$types';
import { json, error } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const roadmaps = await fetchOverviews(ContentTypeEnum.Roadmap, params.lang);

		return json(roadmaps);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
