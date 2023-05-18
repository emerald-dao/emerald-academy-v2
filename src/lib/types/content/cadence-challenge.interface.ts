import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Author } from './content-overview.interface';

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
}
