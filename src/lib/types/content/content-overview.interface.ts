import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Question } from './metadata/faqs.interface';
import type { ExpertiseEnum } from './metadata/expertise.enum';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface Overview {
	title: string;
	contentType: ContentTypeEnum;
	slug: string;
	excerpt: string;
	metadata: ContentMetadata;
}

interface ContentMetadata {
	expertise: ExpertiseEnum;
	duration: string;
	prerequisites: string[];
	subjects: SubjectsEnum[];
	faqs?: Question[];
}
