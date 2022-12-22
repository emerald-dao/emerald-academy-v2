export const load = async ({ fetch }) => {
	const response = await fetch(`/api/content/courses`);
	const courses = await response.json();

	return {
		courses
	};
};
