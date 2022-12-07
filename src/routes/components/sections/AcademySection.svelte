<script type="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { Label } from '@emerald-dao/component-library';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	export let roadmaps: RoadmapOverview[];
</script>

<section>
	<div class="container">
		<div class="content">
			<div>
				<h3 class="right-align">Follow one of our roadmaps</h3>
				<div class="labels">
					<Label color="transparent">Dapp development</Label>
					<Label color="transparent">Cadence</Label>
					<Label color="transparent">Web</Label>
				</div>
			</div>

			<div class="cards">
				<Splide
					hasTrack={false}
					options={{
						rewind: true,
						width: 450,
						gap: '0.5rem',
						perPage: 1,
						perMove: 1
					}}
				>
					<div>
						<SplideTrack>
							{#each roadmaps as road}
								<SplideSlide><SpecificContentCard overview={road} /></SplideSlide>
							{/each}
						</SplideTrack>

						<div class="splide__arrows arrows-center">
							<button class="splide__arrow splide__arrow--prev" />
							<button class="splide__arrow splide__arrow--next" />
						</div>
					</div>
				</Splide>
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.content {
		display: grid;
		grid-template-columns: 2fr 3fr;
	}
	.labels {
		display: flex;
		flex-direction: row;
	}
	.arrows-center {
		vertical-align: center;
	}
</style>
