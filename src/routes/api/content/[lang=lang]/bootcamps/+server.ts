import type { Locales } from '$i18n/i18n-types';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const locale = params.lang as Locales;

	try {
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, locale);

		return json(allBootcamps);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
