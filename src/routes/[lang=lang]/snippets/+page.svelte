<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { filterContent } from '$lib/features/catalog-list/functions/filterContent';
	import { createFilters } from '$lib/features/catalog-list/functions/filters';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { createSearchStore, searchHandler } from '$stores/searchBar';
	import { InputWrapper, Seo } from '@emerald-dao/component-library';
	import { onDestroy, onMount } from 'svelte';

	export let data;

	let filters: Filter[] = [];

	let activeFilters = {
		typeOfContent: false,
		expertise: false,
		subject: true
	};

	onMount(() => {
		filters = createFilters(activeFilters);
	});

	$: searchCadence = data.snippets.map((example) => ({
		...example,
		searchTerms: `${example.title} ${example.author?.name}`
	}));

	$: searchStore = createSearchStore(searchCadence);

	$: unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});

	let filteredContent: Promise<Overview[]> | Overview[];

	$: if (filters.length > 0 && $searchStore.search.length > 0) {
		filteredContent = filterContent(filters, $searchStore.filtered, activeFilters);
	} else if (filters.length > 0) {
		filteredContent = filterContent(filters, data.snippets, activeFilters);
	} else if ($searchStore.search.length > 0) {
		filteredContent = $searchStore.filtered;
	} else {
		filteredContent = data.snippets;
	}
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL.SNIPPETS()}</h1>
	<p>Browse an entire list of code examples for you to copy.</p>
	<p>
		To add your own Snippet, make a Pull Request <a
			href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/snippets"
			target="_blank"
			rel="noreferrer">here</a
		>.
	</p>

	<div class="sidebar">
		<h5>{$LL.SEARCH()}</h5>
		<InputWrapper name="search" errors={[]} isValid={false} icon="tabler:search">
			<input
				type="text"
				placeholder="Search by title or author..."
				bind:value={$searchStore.search}
			/>
		</InputWrapper>
		<Filters bind:filters />
	</div>

	<div class="snippets-wrapper">
		{#await filteredContent then content}
			{#each content as snippet}
				<ContentCard overview={snippet} />
			{/each}
		{/await}
	</div>
</section>

<Seo
	title={`Code Snippets | Emerald Academy`}
	description="Examples of how to code things in Cadence and Flow."
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		p {
			a {
				text-decoration: none;
			}
			@include mq(medium) {
				max-width: 40vw;
			}
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
			padding-bottom: var(--space-2);

			@include mq(small) {
				border-bottom: 0;
			}

			h5 {
				font-size: var(--font-size-4);
				margin-bottom: var(--space-2);
				margin-top: 0;
			}
		}

		.snippets-wrapper {
			display: grid;
			grid-template-columns: 0.8fr;
			justify-content: center;
			gap: var(--space-10);
			margin-top: var(--space-5);

			@include mq(small) {
				grid-template-columns: 0.45fr 0.45fr;
			}

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: var(--space-10);
			}
		}
	}
</style>
