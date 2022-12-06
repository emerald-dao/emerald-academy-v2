export function generateSlug(url: string): string {
	const urlParts = url.split('/');
	const slug = urlParts.slice(-3, -1).join('/');
	return slug;
}
