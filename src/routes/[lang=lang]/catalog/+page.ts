import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}`);
		const content = await response.json();

		const subjectCadenceOverview = await import(
			`../../../lib/content/subjects/cadence/${params.lang}/overview.ts`
		);
		const subjectDappDevelopmentOverview = await import(
			`../../../lib/content/subjects/dapp-development/${params.lang}/overview.ts`
		);

		return {
			content,
			featuredSubjects: [subjectCadenceOverview.overview, subjectDappDevelopmentOverview.overview]
		};
	} catch (e) {
		throw error(404, 'The catalog you are looking for does not exist');
	}
};
