<script lang="ts">
	import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '$lib/utilities/i18n/utils';
	import { Dropdown } from '@emerald-dao/component-library';
	import { localesFlags } from '$i18n/localesFlags';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		document.querySelector('html')?.setAttribute('lang', newLocale);
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}
		// run the `load` function again
		invalidateAll();
	};
	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);
	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<Dropdown rightOffset="-1rem" topOffset="1.6rem" width="fit-content">
	<div class="icon-wrapper" slot="parent">
		<Icon icon="material-symbols:translate-rounded" width="0.9em" slot="parent" />
	</div>
	<ul slot="dropdown">
		{#each locales as l}
			<li value={l}>
				<a
					class="header-link row-1 align-center"
					class:active={l === $locale}
					href={`${replaceLocaleInUrl($page.url, l)}`}
				>
					<span class="flag">
						{localesFlags[l]}
					</span>
					{l}
				</a>
			</li>
		{/each}
	</ul>
</Dropdown>

<style type="scss">
	.icon-wrapper {
		margin-top: var(--space-1);
	}

	ul {
		list-style: none;
		padding: var(--space-2) var(--space-5);
		margin: 0;

		li {
			margin-bottom: var(--space-1);

			.flag {
				margin-top: var(--space-1);
			}
		}
	}
</style>
