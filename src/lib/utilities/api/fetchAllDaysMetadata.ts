export const fetchAllDaysMetadata = async () => {
	const allDaysFiles = import.meta.glob('/src/lib/content/courses/**/**/*.md');

	const iterableDaysFiles = Object.entries(allDaysFiles);

	const allDays = await Promise.all(
		iterableDaysFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const daysPath = path.slice(8, -3);
			const week = daysPath.split('/')[4];
			const weekNumber = Number(week.replace('week', ''));

			return {
				meta: metadata,
				path: daysPath,
				week: weekNumber
			};
		})
	);

	return allDays;
};
