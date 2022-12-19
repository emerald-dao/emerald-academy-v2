export const fetchCadenceOverviews = async () => {
	const allOverviews = import.meta.glob('/src/lib/content/**/**/*.ts');

	const iterableDaysFiles = Object.entries(allOverviews);

	const cadenceOverview = await Promise.all(
		iterableDaysFiles.map(async ([path, resolver]) => {
			const { overview } = await resolver();

			return {
				overview
			};
		})
	);

	return cadenceOverview;
};
