import { locale } from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

// TODO: This is not in use, couldn't figure out how to get the locale to work reactivly
export const navElements = [
	{
		name: 'Catalog',
		url: `/catalog`,
		prefetch: true
	},
	{
		name: 'Cadence by Example',
		url: '/cadence-by-example',
		prefetch: true
	},
	{
		name: 'Resources',
		url: '/resources',
		prefetch: true
	},
	{
		name: 'Achievements',
		url: '/achievements',
		prefetch: true
	},
	{
		name: 'Quickstarts',
		url: '/Quickstarts',
		prefetch: true
	}
];

export const avatarDropdownNav = [
	{
		name: 'My Achievements',
		url: '/achievements',
		prefetch: true,
		icon: 'tabler:diamond'
	}
];
