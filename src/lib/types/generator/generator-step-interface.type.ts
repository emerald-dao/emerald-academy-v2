import type { SvelteComponent } from 'svelte';
import type { StepState } from './generator-step-state.type';

export interface Step {
	title: string;
	slug?: string;
	component: typeof SvelteComponent;
	action: null | (() => Promise<void>);
	form: boolean;
	state?: StepState;
	button?: {
		text: string;
		icon?: string;
	};
}
