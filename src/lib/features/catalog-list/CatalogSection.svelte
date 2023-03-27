<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { filterContent } from './functions/filterContent';
	import { createFilters } from './functions/filters';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { onMount } from 'svelte';

	export let contentList: Overview[];
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

	$: filteredContent =
		filters.length > 0 ? filterContent(filters, contentList, activeFilters) : contentList;
</script>

<section>
	<div class="container">
		<h3>{title}</h3>
		<div class="content-wrapper">
			<div class="sidebar"><Filters bind:filters /></div>
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
