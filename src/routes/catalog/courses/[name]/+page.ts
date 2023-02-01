export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/courses/${params.name}`);
		const course = await response.json();

		return course;
	} catch (e) {
		throw new Error();
	}
};
