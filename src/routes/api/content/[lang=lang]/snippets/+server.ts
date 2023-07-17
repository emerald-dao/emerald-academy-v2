import { json, error } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const GET = async ({ params }) => {
	try {
		const allSnippetsOverviews = await fetchOverviews(ContentTypeEnum.Snippet, undefined);

		return json(allSnippetsOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
