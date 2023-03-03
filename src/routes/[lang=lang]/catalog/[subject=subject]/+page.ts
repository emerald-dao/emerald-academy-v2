import { roadmapPerSubject } from '$lib/config/roadmapPerSubject';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/${params.subject}`);
		const content = await response.json();
		const overview = await import(
			`../../../../lib/content/subjects/${params.subject}/${params.lang}/overview.ts`
		);
		const featuredRoadmap = await import(
			`../../../../lib/content/roadmaps/${roadmapPerSubject[params.subject]}/${params.lang}/overview.ts`
		);
		featuredRoadmap.overview.slug = `roadmaps/${roadmapPerSubject[params.subject]}`;

		return {
			content,
			overview: overview.overview,
			featuredRoadmap: featuredRoadmap.overview
		};
	} catch (e) {
		throw error(404, 'The subject you are looking for does not exist');
	}
};
