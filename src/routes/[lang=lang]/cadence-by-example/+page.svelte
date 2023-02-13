<script type="ts">
	import { InputWrapper } from '@emerald-dao/component-library';
	import { locale, LL } from '$i18n/i18n-svelte';
	import type { MarkdownMeta } from '$lib/types/content/metadata/markdown-meta.interfaces';
	import { createSearchStore, searchHandler } from '$stores/searchBar';
	import { onDestroy } from 'svelte';

	export let data: Data;

	interface Data {
		content: CadenceByExample[];
		locale: string;
	}

	interface CadenceByExample {
		meta: MarkdownMeta;
		path: string;
	}

	$: searchCadence = data.content.map((example: CadenceByExample) => ({
		...example,
		searchTerms: `${example.meta.title}`
	}));

	$: searchStore = createSearchStore(searchCadence);

	$: unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="container-small column-10">
	<h1>Cadence by Example</h1>
	<div class="main-wrapper">
		<div class="sidebar">
			<h5>{$LL.SEARCH()}</h5>
			<InputWrapper name="search" errors={[]} isValid={false} icon="tabler:search">
				<input type="text" placeholder="Search..." bind:value={$searchStore.search} />
			</InputWrapper>
		</div>
		<div class="main">
			{#if $searchStore.search.length > 0 && $searchStore.filtered.length === 0}
				<p>No results found</p>
			{/if}
			{#each $searchStore.filtered as content, i}
				<a
					class="card heading"
					href={`/${$locale}/cadence-by-example/${content.path.split('/')[3]}`}
					>{`${i + 1}. ${content.meta.title}`}</a
				>
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	section {
		.main-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-5);

			@include mq(small) {
				display: grid;
				grid-template-columns: 1fr 3fr;
				gap: var(--space-10);
			}
			.sidebar {
				display: flex;
				flex-direction: column;
				border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
				padding-bottom: var(--space-5);

				@include mq(small) {
					border-right: var(--border-width-primary) var(--clr-border-primary) solid;
					border-bottom: 0;
					height: fit-content;
					padding-bottom: var(--space-8);
					padding-right: var(--space-10);
					position: sticky;
					top: 100px;
					gap: 0;
				}

				h5 {
					font-size: var(--font-size-4);
					margin-bottom: var(--space-2);
					margin-top: 0;
				}
			}

			.main {
				display: flex;
				flex-direction: column;
				gap: var(--space-5);

				.card {
					text-decoration: none;
					padding: var(--space-4) var(--space-6);
					transition: 0.3s;
				}
			}
		}
	}
</style>
