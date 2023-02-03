import type { RequestHandler } from './$types';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang);

	return json(allBootcamps);
};
