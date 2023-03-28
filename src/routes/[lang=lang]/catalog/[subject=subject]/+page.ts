import { roadmapPerSubject } from '$lib/config/roadmapPerSubject';
import { error } from '@sveltejs/kit';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';
import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const load = async ({ fetch, params }) => {
	try {
		let featuredRoadmap;

		const subject = params.subject as SubjectsEnum;

		const response = await fetch(`/api/content/${params.lang}/${params.subject}`);
		const content = await response.json();

		const overview = await import(
			`../../../../lib/content/subjects/${params.subject}/${params.lang}/overview.ts`
		);

		if (roadmapPerSubject[params.subject as SubjectsEnum]) {
			featuredRoadmap = await import(
				`../../../../lib/content/roadmaps/${subject}/${params.lang}/overview.ts`
			);
			featuredRoadmap.overview.slug = `roadmaps/${subject}`;
		}

		return {
			content,
			overview: overview.overview as SubjectOverview,
			featuredRoadmap: featuredRoadmap ? featuredRoadmap.overview : null
		};
	} catch (e) {
		throw error(404, 'The subject you are looking for does not exist');
	}
};
