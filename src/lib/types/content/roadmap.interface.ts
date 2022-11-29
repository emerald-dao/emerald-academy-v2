import type { Overview } from './content-overview.interface';
import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface RoadmapOverview extends Overview {
	contents: RoadmapContent[];
}

interface RoadmapContent {
	title: string;
	excerpt: string;
	contentType: ContentTypeEnum;
	duration: string;
	subjects: SubjectsEnum[];
	url: string;
}
