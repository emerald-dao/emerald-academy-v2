import type { ContentTypeEnum } from './metadata/content-types.enum';
export interface Template {
	title: string;
	contentType: ContentTypeEnum;
	slug: string;
	audited: boolean;
	web: string;
	user: {
		name: string;
		userAvatarUrl: string;
		github: string;
		twitter?: string;
		discord?: string;
	};
	templateRepositoryUrl: string;
	description: string;
}
