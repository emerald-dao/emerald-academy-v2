import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
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
};
