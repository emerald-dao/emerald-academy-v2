import { roadmapPerSubject } from '$lib/config/roadmapPerSubject';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}/${params.subject}`);
	const content = await response.json();
	const overview = await import(
		`../../../../lib/content/subjects/${params.subject}/${params.lang}/overview.ts`
	);
	const featuredRoadmap = await import(`../../../../lib/content/${roadmapPerSubject[params.subject]}/${params.lang}/overview`)

	return {
		content,
		overview: overview.overview,
		featuredRoadmap: featuredRoadmap.overview
	};
};
