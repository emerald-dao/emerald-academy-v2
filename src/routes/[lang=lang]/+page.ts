import { featuredContent } from '$lib/config/featuredContent';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const courses = [];
		const bootcamps = [];
		const roadmaps = [];

		for (const featuredCourse of featuredContent.courses) {
			try {
				const course = await import(
					`../../lib/content/courses/${featuredCourse}/${params.lang}/overview.ts`
				);
				course.overview.slug = `courses/${featuredCourse}`;
				courses.push(course.overview);
			} catch (e) {
				console.error('Featured course missing for this language');
			}
		}

		for (const featuredBootcamp of featuredContent.bootcamps) {
			try {
				const bootcamp = await import(
					`../../lib/content/bootcamps/${featuredBootcamp}/${params.lang}/overview.ts`
				);
				bootcamp.overview.slug = `bootcamps/${featuredBootcamp}`;
				bootcamps.push(bootcamp.overview);
			} catch (e) {
				console.error('Featured bootcamp missing for this language');
			}
		}

		for (const featuredRoadmap of featuredContent.roadmaps) {
			try {
				const roadmap = await import(
					`../../lib/content/roadmaps/${featuredRoadmap}/${params.lang}/overview.ts`
				);
				roadmap.overview.slug = `roadmaps/${featuredRoadmap}`;
				roadmaps.push(roadmap.overview);
			} catch (e) {
				console.error('Featured roadmap missing for this language');
			}
		}

		return {
			courses,
			bootcamps,
			roadmaps
		};
	} catch (e) {
		throw error(404, "Couldn't find data for the language you are looking");
	}
};
