<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { filterContent } from './functions/filterContent';
	import { createFilters } from './functions/filters';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { onMount, onDestroy } from 'svelte';
	import { InputWrapper } from '@emerald-dao/component-library';
	import { createSearchStore, searchHandler } from '$stores/searchBar';

	export let contentList: Overview[];
	console.log(contentList);
	export let title: string = 'All contents';
	export let typeOfContentFilter = true;
	export let expertiseFilter = true;
	export let subjectFilter = true;

	let filters: Filter[] = [];

	let activeFilters = {
		typeOfContent: typeOfContentFilter,
		expertise: expertiseFilter,
		subject: subjectFilter
	};

	onMount(() => {
		filters = createFilters(activeFilters);
	});

	$: searchCadence = contentList.map((example) => ({
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
		filteredContent = filterContent(filters, contentList, activeFilters);
	} else if ($searchStore.search.length > 0) {
		filteredContent = $searchStore.filtered;
	} else {
		filteredContent = contentList;
	}
</script>

<section>
	<div class="container">
		<h3>{title}</h3>
		<div class="content-wrapper">
			<div class="sidebar">
				<div>
					<h5>{$LL.SEARCH()}</h5>
					<InputWrapper name="search" errors={[]} isValid={false} icon="tabler:search">
						<input
							type="text"
							placeholder="Search by title or author..."
							bind:value={$searchStore.search}
						/>
					</InputWrapper>
				</div>
				<Filters bind:filters />
			</div>
			<div class="main">
				{#await filteredContent then contents}
					{#if contents.length > 0}
						{#each contents as content}
							<ContentCard overview={content} />
						{/each}
					{:else}
						<span><em>No content found</em></span>
					{/if}
				{/await}
			</div>
		</div>
	</div>
</section>

<style type="scss">
	section {
		border-bottom: 1px var(--clr-border-primary) solid;

		.content-wrapper {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-5);
			margin-top: var(--space-12);

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 3fr;
				gap: var(--space-10);
			}

			.sidebar {
				display: flex;
				flex-direction: column;
				gap: var(--space-4);
				border-bottom: 0.5px var(--clr-neutral-primary) solid;
				height: fit-content;
				padding-bottom: var(--space-4);
				padding-right: var(--space-4);

				@include mq(medium) {
					padding-block: var(--space-9);
					gap: var(--space-10);
					border-bottom: none;
					border-right: 1px var(--clr-neutral-badge) solid;
					position: sticky;
					top: 110px;
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
				gap: var(--space-10);

				@include mq(medium) {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: var(--space-10);
				}

				span:has(em) {
					margin-top: var(--space-8);
					color: var(--clr-text-off);
				}
			}
		}
	}
</style>
