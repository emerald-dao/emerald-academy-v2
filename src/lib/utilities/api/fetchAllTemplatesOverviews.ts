export const fetchAllTemplatesOverviews = async () => {
	const allTemplatesOverviews = import.meta.glob('/src/lib/content/templates/**/*.ts');

	const iterableFiles = Object.entries(allTemplatesOverviews);

	const allOverviews = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { overview } = await resolver();
			return overview;
		})
	);

	return allOverviews;
};