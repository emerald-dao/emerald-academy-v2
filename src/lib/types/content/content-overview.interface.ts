import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { ExpertiseEnum } from './metadata/expertise.enum';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface Overview {
	title: string;
	slug?: string;
	contentType: ContentTypeEnum;
	excerpt: string;
	metadata: ContentMetadata;
	author: Author;
}

interface ContentMetadata {
	expertise?: ExpertiseEnum;
	duration?: string;
	prerequisites?: string[];
	subjects: SubjectsEnum[];
	price?: string;
	faqs?: Faq[];
}

export interface Faq {
	question: string;
	answer: string;
}

export interface Author {
	name: string;
	socialMediaUrl: string;
	avatarUrl?: string;
	isVerified: boolean;
	walletAddress?: string;
}
