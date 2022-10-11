// import persistentWritable from '$lib/utilities/persistentWritable';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const theme: Writable<'light' | 'dark'> = writable('dark');
