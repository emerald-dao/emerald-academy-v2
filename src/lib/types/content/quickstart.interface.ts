import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Author } from './content-overview.interface';
export interface Quickstart {
	title: string;
	mobile: boolean;
	contentType: ContentTypeEnum;
	audited: boolean;
	web: string;
	author: Author;
	quickstartRepositoryUrl: string;
	description: string;
}
