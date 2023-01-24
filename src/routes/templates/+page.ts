export const load = async ({ fetch }) => {
	const response = await fetch(`/api/content/templates`);
	const templates = await response.json();

	return {
		templates
	};
};