export const load = async ({ fetch }) => {
	const response = await fetch(`/api/content`);
	const content = await response.json();

	return {
		content
	};
};
