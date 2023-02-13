<script type="ts">
	import RoadmapContentCard from './__components/RoadmapContentCard.svelte';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/ContentIntro.svelte';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	export let data: Data;

	interface Data {
		roadmap: RoadmapOverview;
	}
</script>

<section>
	<div class="container main-wrapper">
		<div class="content">
			<SpecificContentCard overview={data.roadmap} />
		</div>

		<div class="overview-wrapper">
			<CurriculumOverview overview={data.roadmap} />
		</div>
	</div>
	<section>
		<div class="container">
			{#each data.roadmap.contents as roadmapContent}
				<RoadmapContentCard {roadmapContent} />
			{/each}
		</div>
	</section>
</section>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);

		@include mq(small) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-content: space-between;
		}
	}
</style>
