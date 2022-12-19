import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

interface CadenceOverview {
	title: string;
	excerpt: string;
	featuredContentSlug: string;
	contentType: ContentTypeEnum;
}

export const overview: CadenceOverview = {
	title: 'Cadence',
	contentType: ContentTypeEnum.Roadmap,
	excerpt:
		'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
	featuredContentSlug: generateSlug(import.meta.url)
};
