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
		name: 'Cadence By Example',
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
		name: 'Templates',
		url: '/templates',
		prefetch: true
	}
];

export const emeraldTools = [
	{
		name: 'Emerald Academy',
		url: 'https://academy.ecdao.org/'
	},
	{
		name: 'FLOAT',
		url: 'https://floats.city/'
	},
	{
		name: 'Emerald Bot',
		url: 'https://bot.ecdao.org/'
	},
	{
		name: 'Geeft',
		url: 'https://geeft.ecdao.org/'
	},
	{
		name: 'Drizzle',
		url: 'https://www.drizzle33.app/'
	}
];

export const socialMedia = [
	{
		name: 'Twitter ',
		url: 'https://twitter.com/emerald_dao',
		icon: 'ion:logo-twitter'
	},
	{
		name: 'Github ',
		url: 'https://github.com/emerald-dao',
		icon: 'ion:logo-github'
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
