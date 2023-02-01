import { featuredContent } from '$lib/config/featuredContent';

export const load = async () => {
	try {
		const courseOverviewFile = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.courses[0]}/overview`
		);
		const courseOverviewFile2 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.courses[1]}/overview`
		);
		const courseOverviewFile3 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.bootcamps[0]}/overview`
		);
		const courseOverviewFile4 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.bootcamps[1]}/overview`
		);
		const courseOverviewFile5 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.roadmaps[0]}/overview`
		);
		const courseOverviewFile6 = await import(
			/* @vite-ignore */
			`../lib/content/${featuredContent.roadmaps[1]}/overview`
		);
		return {
			courses: [courseOverviewFile.overview, courseOverviewFile2.overview],
			bootcamps: [courseOverviewFile3.overview, courseOverviewFile4.overview],
			roadmaps: [courseOverviewFile5.overview, courseOverviewFile6.overview]
		};
	} catch (e) {
		throw new Error();
	}
};
