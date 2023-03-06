import { featuredContent } from '$lib/config/featuredContent';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const courses = [];
		const bootcamps = [];
		const roadmaps = [];

		for (const featuredCourse of featuredContent.courses) {
			const course = await import(
				`../../lib/content/courses/${featuredCourse}/${params.lang}/overview.ts`
			);
			course.overview.slug = `courses/${featuredCourse}`;
			courses.push(course.overview);
		}

		for (const featuredBootcamp of featuredContent.bootcamps) {
			const bootcamp = await import(
				`../../lib/content/bootcamps/${featuredBootcamp}/${params.lang}/overview.ts`
			);
			bootcamp.overview.slug = `bootcamps/${featuredBootcamp}`;
			bootcamps.push(bootcamp.overview);
		}

		for (const featuredRoadmap of featuredContent.roadmaps) {
			const roadmap = await import(
				`../../lib/content/roadmaps/${featuredRoadmap}/${params.lang}/overview.ts`
			);
			roadmap.overview.slug = `roadmaps/${featuredRoadmap}`;
			roadmaps.push(roadmap.overview);
		}

		return {
			courses,
			bootcamps,
			roadmaps
		};
	} catch (e) {
		throw error(404, 'The language you are looking for does not exist');
	}
};
