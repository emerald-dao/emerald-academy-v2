import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { ExpertiseEnum } from './metadata/expertise.enum';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface Overview {
	title: string;
	slug?: string;
	contentType: ContentTypeEnum;
	excerpt: string;
	metadata: ContentMetadata;
}

interface ContentMetadata {
	expertise: ExpertiseEnum;
	duration: string;
	prerequisites: string[];
	subjects: SubjectsEnum[];
	price?: string;
	faqs?: Question[];
}

interface Question {
	question: string;
	answer: string;
}
