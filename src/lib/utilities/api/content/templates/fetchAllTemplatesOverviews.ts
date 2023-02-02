export const fetchAllTemplates = async () => {
	const allTemplates = import.meta.glob('/src/lib/content/templates/**/*.ts');

	const iterableFiles = Object.entries(allTemplates);

	const templates = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { overview } = await resolver();

			return overview;
		})
	);

	return templates;
};
