import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}`);
		const content = await response.json();

		const subjectCadenceOverview = await import(
			`../../../lib/content/subjects/cadence/${params.lang}/overview.ts`
		);
		const subjectDAppDevOverview = await import(
			`../../../lib/content/subjects/dapp-dev/${params.lang}/overview.ts`
		);

		return {
			content,
			featuredSubjects: [subjectCadenceOverview.overview, subjectDAppDevOverview.overview]
		};
	} catch (e) {
		throw error(404, 'The catalog you are looking for does not exist');
	}
};
