export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/roadmaps`);
		const roadmap = await response.json();
		console.log(roadmap);

		return {
			roadmap
		};
	} catch (e) {
		throw new Error();
	}
};
