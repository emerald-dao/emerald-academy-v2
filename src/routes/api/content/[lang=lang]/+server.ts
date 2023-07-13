import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';
import { blogs } from '$lib/content/blogs';
import { tweets } from '$lib/content/tweets';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	try {
		const allCourses = await fetchOverviews(ContentTypeEnum.Course, params.lang as Locales);
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang as Locales);
		const allRoadmaps = await fetchOverviews(ContentTypeEnum.Roadmap, params.lang as Locales);
		const allTutorials = await fetchOverviews(ContentTypeEnum.Tutorial, params.lang as Locales)
		const allBlogs = blogs;
		const allTweets = tweets;

		const allContent = allCourses.concat(allBootcamps, allRoadmaps, allTutorials, allBlogs, allTweets);

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
