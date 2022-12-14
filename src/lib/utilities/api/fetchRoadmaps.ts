export const fetchRoadmaps = async () => {
	console.log('a');

	const roadmaps = import.meta.glob('/src/lib/content/roadmaps/**/*.ts');

	console.log(roadmaps);
	const iterableFiles = Object.entries(roadmaps);

	const allRoadmaps = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { roadmap } = await resolver();
			const postPath = path.slice(8, -3);
			return { roadmap, postPath };
		})
	);

	return allRoadmaps;
};
