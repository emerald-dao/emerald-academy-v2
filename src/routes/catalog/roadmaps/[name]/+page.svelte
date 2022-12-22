<script type="ts">
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { Label } from '@emerald-dao/component-library';
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
								<h4 class="w-bold">{content.title}</h4>
							</a>

							<p>{content.excerpt}</p>
						</div>
						<div class="type">
							<Label color="primary">{content.contentType}</Label>
							<Label color="neutral">{content.duration}</Label>
						</div>

						<div>
							{#each content.subjects as sub}
								<Label color="transparent">{sub}</Label>
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
	a {
		text-decoration: none;
	}
	.type {
		display: flex;
		flex-direction: row;
		gap: var(--space-2);
		height: fit-content;
		vertical-align: middle;
	}
</style>
