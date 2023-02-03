import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const cadenceByExampleMarkdownFile = await import(
			`../../../lib/content/cadenceByExample/${params.id}.md`
		);

		const meta = cadenceByExampleMarkdownFile.metadata;
		const content = cadenceByExampleMarkdownFile.default;
		const slug = params.id;

		return {
			slug,
			content,
			meta
		};
	} catch (e) {
		throw new Error(`You missed it`);
	}
};
