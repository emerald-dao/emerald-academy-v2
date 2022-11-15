export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/tips&tricks`);
		const tAt = await response.json();
		// const thisCourse = courses.filter((course) => course.path.includes(params.courseName));

		return {
			tAt
		};
	} catch (e) {
		throw new Error();
	}
}; 