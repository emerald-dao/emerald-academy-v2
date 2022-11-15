export const fetchAllTipsAndTricksMetadata = async () => {
	const allTaTfiles = import.meta.glob('/src/lib/content/tips&tricks/*.md');

	const iterableTaTFiles = Object.entries(allTaTfiles);

	const allTaT = await Promise.all(
		iterableTaTFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const daysPath = path.slice(8, -3);
			

			return {
				meta: metadata
                ,path: daysPath
				
			};
		})
	);

	return allTaT;
};
