<script type="ts">
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import { contentTypes } from '$lib/config/contentTypes';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { Label } from '@emerald-dao/component-library';
	import { each } from 'svelte/internal';
	export let data: Data;

	interface Data {
		roadmap: RoadmapOverview;
	}
	console.log(data);
</script>

<section>
	<div class="container grid-wrapper">
		<div class="content">
			<SpecificContentCard overview={data.roadmap} />
		</div>

		<div>
			<CurriculumOverview overview={data.roadmap} />
		</div>
	</div>
	<section>
		<div class="container">
			{#each data.roadmap.contents as content}
				<div class="card-primary">
					<div class="grid-wrapper">
						<div>
							<a href={`/${content.url}`}>
								<p class="w-bold">{content.title}</p>
							</a>

							<p>{content.excerpt}</p>
							<Label>{content.contentType}</Label>
							<Label>{content.duration}</Label>
						</div>
						<div>
							{#each content.subjects as sub}
								<Label>{sub}</Label>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</section>

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.content {
		padding-right: var(--space-10);
	}
	p {
		padding: var(--space-2) 0 var(--space-2) 0;
	}
	.card-primary {
		margin-bottom: var(--space-2);
	}
</style>
