<script type="ts">
	import RoadmapContentCard from './__components/RoadmapContentCard.svelte';
	import SpecificContentCard from '$lib/components/cards/ContentIntro.svelte';
	import RoadmapOverviewModal from '$lib/components/cards/RoadmapOverviewModal.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';

	export let data;
</script>

<section class="section-small container-small main-wrapper">
	<div class="content">
		<SpecificContentCard overview={data.roadmap} showBreadcrumbs={true} />
	</div>
	<div class="overview-wrapper">
		<RoadmapOverviewModal overview={data.roadmap} />
	</div>
</section>
<section class="secondary-section">
	<div class="container-small column-10">
		<h4>Contents</h4>
		<div class="column-2">
			{#each data.roadmap.contents as roadmapContent, i}
				<RoadmapContentCard {roadmapContent} {i} />
			{/each}
		</div>
	</div>
</section>

<Seo
	title={`${data.roadmap.title} | Roadmap | Emerald Academy`}
	description="Full action plan"
	type="WebPage"
/>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--space-7);
		gap: var(--space-8);

		@include mq(small) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-content: space-between;
		}

		.overview-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	.secondary-section {
		border-block: 1px var(--clr-border-primary) solid;
	}
</style>
