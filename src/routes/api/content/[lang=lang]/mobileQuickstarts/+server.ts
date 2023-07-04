import { json, error } from '@sveltejs/kit';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	const locale = params.lang as Locales;

	try {
		const allMobileQuickstartsOverviews = await fetchOverviews(
			ContentTypeEnum.MobileQuickstart,
			locale
		);

		return json(allMobileQuickstartsOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
