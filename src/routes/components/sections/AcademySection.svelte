<script type="ts">
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { Button } from '@emerald-dao/component-library';

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

<section>
	<div class="container">
		<div class="content">
			<div>
				<h3>Follow one of our Learning Paths</h3>
				<div>
					<div class="sidebar">
						<Filters bind:filters />
						<div class="button">
							<Button target="_blank" href="/catalog">Start Learning</Button>
						</div>
					</div>
				</div>
			</div>

			<div class="cards">
				{#each roadmaps as road}
					{#if filters[0].filterBucket.length < 1}
						<ContentCard overview={road} />
					{:else if filters[0].filterBucket.some((item) => road.metadata.subjects.includes(item))}
						<ContentCard overview={road} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.content {
		display: grid;
		grid-template-columns: 1fr 2fr;

		h3 {
			justify-content: left;
			--font-weight: var(--font-weight-semibold);
			text-align: right;
			margin-right: var(--space-13);
		}

		.sidebar {
			text-align: right;
			margin: var(--space-3) var(--space-12) 0 0;
			float: right;
		}
		.button {
			float: right;
			margin-right: var(--space-2);
		}
		.cards {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-3);
		}
	}
</style>
