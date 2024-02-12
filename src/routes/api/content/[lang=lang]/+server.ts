import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';
import { blogs } from '$lib/content/blogs';
import { tweets } from '$lib/content/tweets';
import type { Locales } from '$i18n/i18n-types';
import { videos } from '$lib/content/videos';

export const GET = async ({ params }) => {
	try {
		let allCourses = await fetchOverviews(ContentTypeEnum.Course, params.lang as Locales);
		// temporarily disable Learn Cadence: Intermediate
		allCourses = allCourses.filter(course => course?.title !== 'Learn Cadence: Intermediate')
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang as Locales);
		const allTutorials = await fetchOverviews(ContentTypeEnum.Tutorial, params.lang as Locales)
		const allBlogs = blogs;
		const allTweets = tweets;
		const allVideos = videos;

		const allContent = allCourses.concat(allBootcamps, allTutorials, allBlogs, allTweets, allVideos);

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
