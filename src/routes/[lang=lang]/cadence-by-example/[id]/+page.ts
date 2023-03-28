import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const cadenceByExampleMarkdownFile = await import(
			`../../../../lib/content/cadenceByExample/${params.lang}/${params.id}.md`
		);

		const meta = cadenceByExampleMarkdownFile.metadata;
		const content = cadenceByExampleMarkdownFile.default as ConstructorOfATypedSvelteComponent;
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
