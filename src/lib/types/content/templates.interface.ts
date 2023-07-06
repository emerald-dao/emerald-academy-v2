import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Author } from './content-overview.interface';
export interface Template {
	title: string;
	mobile: boolean;
	contentType: ContentTypeEnum;
	audited: boolean;
	web: string;
	author: Author;
	templateRepositoryUrl: string;
	description: string;
}
