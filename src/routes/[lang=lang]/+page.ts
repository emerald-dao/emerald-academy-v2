import { featuredContent } from '$lib/config/featuredContent';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const featuredCourse1 = await import(
			`../../lib/content/courses/${featuredContent.courses[0]}/${params.lang}/overview.ts`
		);
		const featuredCourse2 = await import(
			`../../lib/content/courses/${featuredContent.courses[1]}/${params.lang}/overview.ts`
		);
		const featuredBootcamp1 = await import(
			`../../lib/content/bootcamps/${featuredContent.bootcamps[0]}/en/overview.ts`
		);
		const featuredBootcamp2 = await import(
			`../../lib/content/bootcamps/${featuredContent.bootcamps[1]}/en/overview.ts`
		);
		const featuredRoadmap1 = await import(
			`../../lib/content/roadmaps/${featuredContent.roadmaps[0]}/${params.lang}/overview.ts`
		);
		const featuredRoadmap2 = await import(
			`../../lib/content/roadmaps/${featuredContent.roadmaps[1]}/${params.lang}/overview.ts`
		);
		return {
			courses: [featuredCourse1.overview, featuredCourse2.overview],
			bootcamps: [featuredBootcamp1.overview, featuredBootcamp2.overview],
			roadmaps: [featuredRoadmap1.overview, featuredRoadmap2.overview]
		};
	} catch (e) {
		throw new Error();
	}
};
