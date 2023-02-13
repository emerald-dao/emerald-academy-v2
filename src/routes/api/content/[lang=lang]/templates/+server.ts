import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const GET: RequestHandler = async ({ params }) => {
	const allTemplatesOverviews = await fetchOverviews(ContentTypeEnum.Template, params.lang);

	return json(allTemplatesOverviews);
};
