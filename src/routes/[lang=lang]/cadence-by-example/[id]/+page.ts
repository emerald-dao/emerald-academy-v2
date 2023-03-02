import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		let cadenceByExampleMarkdownFile;

		try {
			cadenceByExampleMarkdownFile = await import(
				`../../../../lib/content/cadenceByExample/${params.lang}/${params.id}.md`
			);
		} catch (e) {
			cadenceByExampleMarkdownFile = await import(
				`../../../../lib/content/cadenceByExample/en/${params.id}.md`
			);
		}

		const meta = cadenceByExampleMarkdownFile.metadata;
		const content = cadenceByExampleMarkdownFile.default;
		const slug = params.id;

		return {
			slug,
			content,
			meta
		};
	} catch (e) {
		throw error(404, 'The cadence you are looking for does not exist');
	}
};
