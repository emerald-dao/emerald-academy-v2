<script type="ts">
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import Filters from '$lib/components/filters/Filters.svelte';

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
	console.log(roadmaps);
	let filter = false;
</script>

<section>
	<div class="container">
		<div class="content">
			<div>
				<h3 class="right-align">Follow one of our roadmaps</h3>
				<div class="labels">
					<div class="sidebar column-10"><Filters bind:filters /></div>
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
	}
	.labels {
		display: flex;
		flex-direction: row;
		gap: var(--space-3);
		padding-top: var(--space-3);
	}
	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
	}
</style>
