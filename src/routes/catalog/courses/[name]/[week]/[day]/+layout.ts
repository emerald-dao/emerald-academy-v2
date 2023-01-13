export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/courses/daysMetadata`);
		const courses = await response.json();
		const thisCourse = courses.filter((course) => course.path.includes(params.name));

		return {
			thisCourse
		};
	} catch (e) {
		throw new Error();
	}
};
