import { writable } from 'svelte/store';

export const createBootcampOnboardingStore = writable({
	name: '',
	email: '',
	codingExperience: '',
	product: '',
	discordHandle: '',
	walletAddress: '',
	bootcamp_name: ''
});
