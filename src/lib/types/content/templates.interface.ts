export interface Template {
	title: string;
	audited: boolean;
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
