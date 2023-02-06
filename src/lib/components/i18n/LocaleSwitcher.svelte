<script lang="ts">
	import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '$lib/utilities/i18n/utils';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale);
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

	let selectedLocale: Locales;

	$: selectedLocale && goto(replaceLocaleInUrl($page.url, selectedLocale));
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<div class="main-wrapper">
	<div class="icon-wrapper">
		<Icon icon="material-symbols:translate-rounded" />
	</div>
	<select bind:value={selectedLocale}>
		{#each locales as l}
			<option value={l}>
				{l}
			</option>
		{/each}
	</select>
</div>

<style type="scss">
	.main-wrapper {
		border: 0.5px var(--clr-border-primary) solid;
		border-radius: var(--radius-1);
		display: flex;
		flex-direction: row;
		align-items: center;
		width: fit-content;
		gap: var(--space-1);
		position: relative;

		.icon-wrapper {
			position: absolute;
			top: 6.2px;
			left: 6px;
			z-index: -1;
		}

		select {
			border: none;
			background-color: transparent;
			color: var(--clr-font-primary);
			appearance: none;
			padding: var(--space-1) var(--space-1) var(--space-1) 26px;
			border-radius: inherit;
			cursor: pointer;

			&:focus {
				outline: none;
			}
		}
	}
</style>
