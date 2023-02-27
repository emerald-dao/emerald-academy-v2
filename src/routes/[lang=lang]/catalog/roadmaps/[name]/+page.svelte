<script type="ts">
	import RoadmapContentCard from './__components/RoadmapContentCard.svelte';
	import SpecificContentCard from '$lib/components/cards/ContentIntro.svelte';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	export let data: Data;

	interface Data {
		roadmap: RoadmapOverview;
	}
</script>

<section class="container-small main-wrapper">
	<div class="content">
		<SpecificContentCard overview={data.roadmap} />
	</div>
</section>
<section class="container-small">
	{#each data.roadmap.contents as roadmapContent}
		<RoadmapContentCard {roadmapContent} />
	{/each}
</section>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);

		@include mq(small) {
			display: grid;
			grid-template-columns: 2fr 1fr;
			justify-content: space-between;
		}
	}
</style>
