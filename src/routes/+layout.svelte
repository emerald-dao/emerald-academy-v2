<script type="ts">
	import '../app.postcss';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '@emerald-dao/component-library/styles/app.scss';
	import '$lib/styles/_articles.scss';
	import '$lib/styles/_code.scss';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/components/i18n/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import { Header, Footer } from '@emerald-dao/component-library';
	import { emeraldTools, socialMedia } from '$lib/config/navigation';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { network, user } from '$stores/FlowStore';
	import { getFindProfile } from '$flow/utils';
	import LocaleSwitcher from '$lib/components/i18n/LocaleSwitcher.svelte';
	import dappInfo from '$lib/config/config';

	export let data: LayoutData;

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	export const navElements = [
		{
			name: 'Catalog',
			url: `/${$locale}/catalog`,
			prefetch: true
		},
		{
			name: 'Cadence By Example',
			url: `/${$locale}/cadence-by-example`,
			prefetch: true
		},
		{
			name: 'Resources',
			url: `/${$locale}/resources`,
			prefetch: true
		},
		{
			name: 'Templates',
			url: `/${$locale}/templates`,
			prefetch: true
		}
	];

	export const avatarDropdownNav = [
		{
			name: 'My Achievements',
			url: `/${$locale}/achievements`,
			prefetch: true,
			icon: 'tabler:diamond'
		}
	];
</script>

<Header
	themeStore={theme}
	{logIn}
	{unauthenticate}
	{getFindProfile}
	{navElements}
	user={$user}
	network={$network}
	avatarDropDownNavigation={avatarDropdownNav}
>
	<LocaleSwitcher slot="commands" />
</Header>
<main>
	<slot />
</main>
<Footer {navElements} {emeraldTools} socials={socialMedia} />

<svelte:head>
	<title>{dappInfo.title}</title>
	<HeadHrefLangs />
</svelte:head>
