import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}`);
	const content = await response.json();
	const overview = await import(
		`../../../../lib/content/subjects/${params.subject}/${params.lang}/overview.ts`
	);

	return {
		content,
		overview: overview.overview
	};
};
