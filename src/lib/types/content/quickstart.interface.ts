import type { ContentTypeEnum } from './metadata/content-types.enum';
import type { Author, Overview } from './content-overview.interface';

export interface Quickstart extends Overview {
	mobile: boolean;
	audited: boolean;
	web: string;
	quickstartRepositoryUrl: string;
}
