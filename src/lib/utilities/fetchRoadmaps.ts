export const fetchRoadmaps = async () => {
	
    const roadmaps = import.meta.glob('/src/lib/content/roadmaps/*.ts');
	
	const iterableFiles = Object.entries(roadmaps);

	const allRoadmaps = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { roadmap } = await resolver();

			return roadmap;
		})
	);

	return allRoadmaps;
};