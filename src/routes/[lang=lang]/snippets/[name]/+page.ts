import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/snippets/${params.name}/overview.ts`
		);
		const readmeFile = await import(
			`../../../../lib/content/snippets/${params.name}/readme.md`
		);

		return {
			overview: overviewFile.overview,
			readme: readmeFile.default,
			metadata: readmeFile.metadata
		};
	} catch (e) {
		throw error(404, 'The snippet you are looking for does not exist');
	}
};
