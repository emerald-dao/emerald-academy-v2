export const load = async ({ fetch, params }) => {
	try {
		const roadmapFile = await import(`../../../../lib/content/roadmaps/${params.name}/overview.ts`);
		return {
			roadmap: roadmapFile.overview
		};
	} catch (e) {
		throw new Error();
	}
};
