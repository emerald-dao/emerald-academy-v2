<script type="ts">
	import '../app.postcss';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '@emerald-dao/component-library/styles/app.scss';
	import '$lib/styles/_articles.scss';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/components/i18n/HeadHrefLangs.svelte';
	import { Header, Footer } from '@emerald-dao/component-library';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { user } from '$stores/flow/FlowStore';
	import { getFindProfile } from '$flow/utils';
	import LocaleSwitcher from '$lib/components/i18n/LocaleSwitcher.svelte';
	import { network } from '$flow/config';
	import { page } from '$app/stores';

	export let data;

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	$: navElements = [
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
			name: 'Quickstarts',
			url: `/${$locale}/quickstarts`,
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

	let headerWidth: 'medium' | 'large' = 'medium';

	$: headerWidth = $page.params.lesson ? 'large' : 'medium';
</script>

<Header
	themeStore={theme}
	{logIn}
	{unauthenticate}
	{getFindProfile}
	{navElements}
	user={$user}
	{network}
	avatarDropDownNavigation={avatarDropdownNav}
	logoHref={`/${$locale}/`}
	logoUrl="/EA_Iso.svg"
	logoText="Emerald Academy"
	width={headerWidth}
>
	<LocaleSwitcher slot="commands" />
</Header>
<main>
	<slot />
</main>

<Footer {navElements} logoHref={`/${$locale}/`} logoUrl="/EA_Iso.svg" logoText="Emerald Academy" />

<svelte:head>
	<HeadHrefLangs />
</svelte:head>

<style type="scss">
	main {
		display: flex;
		flex-direction: column;
	}
</style>
