export async function load({ params }) {
	try {
		const cadenceByExampleMarkdownFile = await import(
			`../../../lib/content/cadenceByExample/${params.id}.md`
		);

		const meta = cadenceByExampleMarkdownFile.metadata;
		const content = cadenceByExampleMarkdownFile.default;

		return {
			content,
			meta
		};
	} catch (e) {
		throw new Error(`You missed it`);
	}
}
