import type { Overview } from './content-overview.interface';

export interface Quickstart extends Overview {
	type: AppTypeEnum;
	quickstartRepositoryUrl: string;
}

export enum AppTypeEnum {
	SvelteKit = 'SvelteKit',
	NextJS = 'Next.js',
	SwiftUI = 'SwiftUI (iOS/iPadOS)'
}