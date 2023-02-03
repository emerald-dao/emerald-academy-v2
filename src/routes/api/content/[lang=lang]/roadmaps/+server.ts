import type { RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const GET: RequestHandler = async ({ params }) => {
	const roadmaps = await fetchOverviews(ContentTypeEnum.Roadmap, params.lang);

	return json(roadmaps);
};
