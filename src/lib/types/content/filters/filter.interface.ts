import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { ExpertiseEnum } from '../metadata/expertise.enum';
import type { ContentTypeEnum } from '../metadata/content-types.enum';

export interface Filter {
	title: string;
	slug: 'type-of-content' | 'subject' | 'expertise';
	filterElement: FilterElement[];
	filterBucket: FilterSlugs[];
}

interface FilterElement {
	icon: string;
	slug: FilterSlugs;
}

export type FilterSlugs = SubjectsEnum | ExpertiseEnum | ContentTypeEnum;
