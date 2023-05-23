import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Author } from './content-overview.interface';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface CadenceChallenge {
	title: string;
	contentType: ContentTypeEnum;
	prize: number;
	link: string;
	description: string;
	image: string;
	solved?: {
		answerLink: string;
		author: Author;
		answerDescription?: string;
	};
	subjects: SubjectsEnum[];
}
