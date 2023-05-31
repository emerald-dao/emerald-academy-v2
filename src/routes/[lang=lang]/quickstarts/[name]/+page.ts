import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/quickstarts/${params.name}/${params.lang}/overview.ts`
		);
		const readmeFile = await import(
			`../../../../lib/content/quickstarts/${params.name}/${params.lang}/readme.md`
		);

		return {
			overview: overviewFile.overview,
			readme: readmeFile.default,
			metadata: readmeFile.metadata
		};
	} catch (e) {
		throw error(404, 'The quickstart you are looking for does not exist');
	}
};
