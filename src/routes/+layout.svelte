<script type="ts">
	import '../app.postcss';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '@emerald-dao/component-library/styles/app.scss';
	import '$lib/styles/_articles.scss';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/components/i18n/HeadHrefLangs.svelte';
	import { Header, Footer, TransactionModal, Seo } from '@emerald-dao/component-library';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { user } from '$stores/flow/FlowStore';
	import LocaleSwitcher from '$lib/components/i18n/LocaleSwitcher.svelte';
	import { network } from '$flow/config';
	import { transactionStore } from '$stores/flow/TransactionStore';
	import dappInfo from '$lib/config/config';
	import { profile } from '$lib/stores/flow/FlowStore';
	import getProfile from '$lib/utilities/api/getProfile';

	export let data;

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	let navElements = [
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
		},
		{
			name: 'Arcade',
			url: `https://arcade.ecdao.org`,
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

	const connectProfileToStore = async (address: string) => {
		$profile = await getProfile(address);
	};

	$: if ($user.addr) {
		connectProfileToStore($user.addr);
	} else {
		$profile = null;
	}
</script>

<TransactionModal
	transactionInProgress={$transactionStore.progress}
	transactionStatus={$transactionStore.transaction}
	transactionId={$transactionStore.transactionId}
	{network}
	on:close={() => transactionStore.resetTransaction()}
/>

<Header
	themeStore={theme}
	{logIn}
	{unauthenticate}
	{navElements}
	profile={$profile}
	user={$user}
	{network}
	avatarDropDownNavigation={avatarDropdownNav}
	logoHref={`/${$locale}/`}
	logoUrl="/ea-logo.png"
	logoText="Emerald Academy"
	width="large"
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

<Seo
	title={dappInfo.title}
	description={dappInfo.description}
	type="WebSite"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	main {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}
</style>
