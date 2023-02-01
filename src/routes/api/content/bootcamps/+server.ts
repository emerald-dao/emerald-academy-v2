import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allCourses = await fetchOverviews(ContentTypeEnum.Bootcamp);

	return json(allCourses);
};
