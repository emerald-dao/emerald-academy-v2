export const load = async ({ fetch, params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/courses/${params.courseName}/overview.js`
		);

		const response = await fetch(`/api/content/courses/daysMetadata`);
		const courses = await response.json();
		const thisCourse = courses.filter((course) => course.path.includes(params.courseName));

		return {
			overview: overviewFile.overview,
			thisCourse
		};
	} catch (e) {
		throw new Error();
	}
};
