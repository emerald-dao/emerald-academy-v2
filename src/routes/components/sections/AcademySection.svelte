<script type="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { Label } from '@emerald-dao/component-library';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	export let roadmaps: RoadmapOverview[];
</script>

<section>
	<div class="container">
		<div class="content">
			<div>
				<h3 class="right-align">Follow one of our roadmaps</h3>
				<div class="labels">
					<Label color="neutral">Dapp development</Label>
					<Label color="neutral">Cadence</Label>
					<Label color="neutral">Web</Label>
				</div>
			</div>

			<div class="cards">
				{#each roadmaps as road}
					<div class="hola">
						<SplideSlide><ContentCard overview={road} /></SplideSlide>
					</div>
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
