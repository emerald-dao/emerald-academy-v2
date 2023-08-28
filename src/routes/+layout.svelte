<script type="ts">
	import '../app.postcss';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '@emerald-dao/component-library/styles/app.scss';
	import '$lib/styles/_articles.scss';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/components/i18n/HeadHrefLangs.svelte';
	import { Header, Footer, TransactionModal } from '@emerald-dao/component-library';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { user } from '$stores/flow/FlowStore';
	import { getFindProfile } from '$flow/utils';
	import LocaleSwitcher from '$lib/components/i18n/LocaleSwitcher.svelte';
	import { network } from '$flow/config';
	import { page } from '$app/stores';
	import { transactionStore } from '$stores/flow/TransactionStore';

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
			name: 'Cadence by Example',
			url: `/${$locale}/cadence-by-example`,
			prefetch: true
		},
		{
			name: 'Code Snippets',
			url: `/${$locale}/snippets`,
			prefetch: true
		},
		{
			name: 'Quickstarts',
			url: `/${$locale}/quickstarts`,
			prefetch: true
		},
		{
			name: 'Flownaut',
			url: `https://flownaut.ecdao.org`,
			prefetch: true,
			target: '_blank'
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

	let headerWidth = 'large';
</script>

<TransactionModal
	transactionInProgress={$transactionStore.progress}
	transactionStatus={$transactionStore.transaction}
	on:close={() => transactionStore.resetTransaction()}
/>

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
	logoUrl="/ea-logo.png"
	logoText="Emerald Academy"
	width={headerWidth}
>
	<LocaleSwitcher slot="commands" />
</Header>
<main>
	<slot />
</main>
<Footer {navElements} logoHref={`/${$locale}/`} logoUrl="/ea-logo.png" logoText="Emerald Academy" />

<svelte:head>
	<HeadHrefLangs />
</svelte:head>

<style type="scss">
	main {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}
</style>
