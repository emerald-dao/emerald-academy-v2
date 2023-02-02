export const fetchAllCourses = async () => {
	const overviews = import.meta.glob('/src/lib/content/courses/**/*.ts');
	const contents = import.meta.glob('/src/lib/content/courses/**/**/*.md');

	const iterableOverviews = Object.entries(overviews);
	const iterableContents = Object.entries(contents);

	const allCourses = await Promise.all(
		iterableOverviews.map(async ([, resolver]) => {
			const { overview } = await resolver();

			const contents = {};

			await Promise.all(
				iterableContents.map(async ([path, resolver]) => {
					const { metadata } = await resolver();

					if (path.includes(overview.slug)) {
						const parts = path.split('/');
						const week = parts[parts.length - 2];

						if (!contents[week]) {
							contents[week] = [];
						}

						const slug = parts.slice(3, 8).join('/').replace('content', 'catalog');

						contents[week].push({
							slug,
							metadata
						});
					}
				})
			);

			return {
				overview,
				contents
			};
		})
	);

	return allCourses;
};
