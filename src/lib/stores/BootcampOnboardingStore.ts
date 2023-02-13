import { writable } from 'svelte/store';

export const createBootcampOnboardingStore = writable({
	name: '',
	email: '',
	codingExperience: '',
	codingExperience2: '',
	discordHandle: '',
	bloctoAddress: ''
});
