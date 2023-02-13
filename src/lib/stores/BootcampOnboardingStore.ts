import { writable } from 'svelte/store';

export const createBootcampOnboardingStore = writable({
	name: '',
	email: '',
	discordHandle: '',
	bloctoAddress: ''
});
