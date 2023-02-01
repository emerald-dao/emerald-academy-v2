import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allCourses = await fetchOverviews(ContentTypeEnum.Course);
	const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp);
	const allRoadmaps = await fetchOverviews(ContentTypeEnum.Roadmap);

	const allContent = allCourses.concat(allBootcamps, allRoadmaps);

	return json(allContent);
};
