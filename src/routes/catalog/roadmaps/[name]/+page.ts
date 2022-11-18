export const load = async ({ fetch, params }) => {
	try {
		const roadmapFile = await import(
			`../../../../lib/content/roadmaps/${params.name}.ts`
		);		
		return {
			roadmap: roadmapFile.roadmap,
                       
		};
        
	} catch (e) {
		throw new Error();
	}
};