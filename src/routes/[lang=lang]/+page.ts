import { featuredContent } from '$lib/config/featuredContent';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const featuredCourse1 = await import(
			`../../lib/content/courses/${featuredContent.courses[0]}/${params.lang}/overview.ts`
		);
		featuredCourse1.overview.slug = `courses/${featuredContent.courses[0]}`;

		const featuredCourse2 = await import(
			`../../lib/content/courses/${featuredContent.courses[1]}/${params.lang}/overview.ts`
		);
		featuredCourse2.overview.slug = `courses/${featuredContent.courses[1]}`;

		const featuredBootcamp1 = await import(
			`../../lib/content/bootcamps/${featuredContent.bootcamps[0]}/en/overview.ts`
		);
		featuredBootcamp1.overview.slug = `bootcamps/${featuredContent.courses[0]}`;

		const featuredBootcamp2 = await import(
			`../../lib/content/bootcamps/${featuredContent.bootcamps[1]}/en/overview.ts`
		);
		featuredBootcamp2.overview.slug = `bootcamps/${featuredContent.courses[1]}`;

		const featuredRoadmap1 = await import(
			`../../lib/content/roadmaps/${featuredContent.roadmaps[0]}/${params.lang}/overview.ts`
		);
		featuredRoadmap1.overview.slug = `roadmaps/${featuredContent.courses[0]}`;

		const featuredRoadmap2 = await import(
			`../../lib/content/roadmaps/${featuredContent.roadmaps[1]}/${params.lang}/overview.ts`
		);
		featuredRoadmap2.overview.slug = `roadmaps/${featuredContent.courses[1]}`;

		return {
			courses: [featuredCourse1.overview, featuredCourse2.overview],
			bootcamps: [featuredBootcamp1.overview, featuredBootcamp2.overview],
			roadmaps: [featuredRoadmap1.overview, featuredRoadmap2.overview]
		};
	} catch (e) {
		throw new Error();
	}
};
