import { featuredContent } from '$lib/config/featuredContent';

export const load = async ({ fetch }) => {
	try {
		const courseOverviewFile = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.courses[0]}/overview`
		);
		const courseOverviewFile2 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.courses[1]}/overview`
		);
		return {
			courses: [courseOverviewFile.overview, courseOverviewFile2.overview]
		};
	} catch (e) {
		throw new Error();
	}
};
