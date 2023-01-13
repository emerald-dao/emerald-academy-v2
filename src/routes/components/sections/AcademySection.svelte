<script type="ts">
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';

	export let roadmaps: RoadmapOverview[];

	let filters: Filter[] = [
		{
			title: 'Subject',
			filterElement: [
				{
					title: 'Cadence',
					icon: 'icon',
					slug: SubjectsEnum.Cadence
				},
				{
					title: 'Frontend',
					icon: 'icon',
					slug: SubjectsEnum.Frontend
				}
			],
			filterBucket: []
		}
	];
</script>

<section class="container">
	<div class="sidebar">
		<h3>Follow one of our Learning Paths</h3>
		<Filters bind:filters hasTitles={false} />
	</div>
	<div class="cards-wrapper">
		{#each roadmaps as road}
			{#if filters[0].filterBucket.length < 1}
				<ContentCard overview={road} />
			{:else if filters[0].filterBucket.some((item) => road.metadata.subjects.includes(item))}
				<ContentCard overview={road} />
			{/if}
		{/each}
	</div>
</section>

<style type="scss">
	section {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: var(--space-9);

		.sidebar {
			text-align: right;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: var(--space-5);

			h3 {
				--font-weight: var(--font-weight-medium);
				text-align: right;
				max-width: 14ch;
			}
		}

		.cards-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-3);
		}
	}
</style>
