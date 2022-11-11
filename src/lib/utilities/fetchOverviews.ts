export const fetchOverviews = async (contentType?: 'courses' | 'bootcamps' | 'tips-and-tricks') => {
	let overviews;

	switch (contentType) {
		case 'courses':
			overviews = import.meta.glob('/src/lib/content/courses/**/*.js');
			break;

		case 'bootcamps':
			overviews = import.meta.glob('/src/lib/content/bootcamps/**/*.js');
			break;

		case 'tips-and-tricks':
			overviews = import.meta.glob('/src/lib/content/tips-and-tricks/**/*.js');
			break;

		case undefined:
			overviews = import.meta.glob('/src/lib/content/**/**/*.js');
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
