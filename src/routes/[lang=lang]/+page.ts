import { featuredContent } from '$lib/config/featuredContent';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const courseOverviewFile = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.courses[0]}/${params.lang}/overview`
		);
		const courseOverviewFile2 = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.courses[1]}/${params.lang}/overview`
		);
		const courseOverviewFile3 = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.bootcamps[0]}/${params.lang}/overview`
		);
		const courseOverviewFile4 = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.bootcamps[1]}/${params.lang}/overview`
		);
		const courseOverviewFile5 = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.roadmaps[0]}/${params.lang}/overview`
		);
		const courseOverviewFile6 = await import(
			/* @vite-ignore */
			`../../lib/content/${featuredContent.roadmaps[1]}/${params.lang}/overview`
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