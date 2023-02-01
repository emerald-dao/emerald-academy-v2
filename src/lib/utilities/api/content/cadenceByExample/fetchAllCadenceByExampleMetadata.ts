export const fetchAllCadenceByExampleMetadata = async () => {
	const allCandenceByExampleFiles = import.meta.glob('/src/lib/content/cadenceByExample/*.md');

	const iterableFiles = Object.entries(allCandenceByExampleFiles);

	const allCadenceByExampleMetadata = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.slice(8, -3);

			return {
				meta: metadata,
				path: slug
			};
		})
	);

	return allCadenceByExampleMetadata;
};
