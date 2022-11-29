export const fetchOverviews = async (
	contentType?: 'courses' | 'bootcamps' | 'tips-and-tricks' | 'roadmaps'
) => {
	let overviews;

	switch (contentType) {
		case 'courses':
			overviews = import.meta.glob('/src/lib/content/courses/**/*.ts');
			break;

		case 'bootcamps':
			overviews = import.meta.glob('/src/lib/content/bootcamps/**/*.ts');
			break;

		case 'tips-and-tricks':
			break;

		case 'roadmaps':
			overviews = import.meta.glob('/src/lib/content/roadmaps/**/*.ts');
			break;

		case undefined:
			overviews = import.meta.glob('/src/lib/content/**/**/*.ts');
	}

	const iterableFiles = Object.entries(overviews);

	const allOverviews = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { overview } = await resolver();

			return overview;
		})
	);

	return allOverviews;
};
