import { error } from '@sveltejs/kit';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';
import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/${params.subject}`);
		const content = await response.json();

		const overview = await import(
			`../../../../lib/content/subjects/${params.subject}/${params.lang}/overview.ts`
		);

		return {
			content,
			overview: overview.overview as SubjectOverview
		};
	} catch (e) {
		throw error(404, 'The subject you are looking for does not exist');
	}
};
