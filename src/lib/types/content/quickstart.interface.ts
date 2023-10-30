import type { Overview } from './content-overview.interface';

export interface Quickstart extends Overview {
	isRecommended: boolean;
	audited: boolean;
	techstack: QuickstartTechstack[];
	quickstartRepositoryUrl: string;
	id: number;
}

export const QUICKSTART_TECHSTACKS = ['sveltekit', 'nextjs', 'swiftui'] as const;

export type QuickstartTechstack = (typeof QUICKSTART_TECHSTACKS)[number];

export const TECHSTACK_DATA: { [key in QuickstartTechstack]: TechstackData } = {
	sveltekit: {
		name: 'SvelteKit',
		icon: 'devicon:svelte'
	},
	nextjs: {
		name: 'Next.js',
		icon: 'devicon:react'
	},
	swiftui: {
		name: 'SwiftUI',
		icon: 'devicon:swift'
	}
};

type TechstackData = {
	name: string;
	icon: string;
};
