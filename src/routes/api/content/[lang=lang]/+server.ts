import type { RequestHandler } from './$types';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';
import { blogs } from '$lib/content/blogs';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const allCourses = await fetchOverviews(ContentTypeEnum.Course, params.lang);
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang);
		const allRoadmaps = await fetchOverviews(ContentTypeEnum.Roadmap, params.lang);
		const allBlogs = blogs;

		const allContent = allCourses.concat(allBootcamps, allRoadmaps, allBlogs);

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
