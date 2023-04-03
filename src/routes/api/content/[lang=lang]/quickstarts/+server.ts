import { json, error } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	const locale = params.lang as Locales;

	try {
		const allQuickstartsOverviews = await fetchOverviews(ContentTypeEnum.Quickstart, locale);

		return json(allQuickstartsOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
