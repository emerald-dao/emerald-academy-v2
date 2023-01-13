<script type="ts">
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/ContentIntro.svelte';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { Label } from '@emerald-dao/component-library';

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
			{#each data.roadmap.contents as content}
				<div class="card-primary">
					<div class="grid-wrapper">
						<div class="title-wrapper">
							<a href={`/${content.url}`}>
								<h4 class="w-bold">{content.title}</h4>
							</a>

							<p>{content.excerpt}</p>
						</div>
						<div class="type-wrapper">
							<Label color="primary">{content.contentType}</Label>
							<Label color="neutral">{content.duration}</Label>
						</div>

						<div class="subjects-wrapper">
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
	.main-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
	}

	.card-primary {
		margin-bottom: var(--space-2);
		a {
			text-decoration: none;
		}
		.grid-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			justify-content: space-between;

			.type-wrapper {
				display: flex;
				flex-direction: row;
				gap: var(--space-2);
				height: fit-content;
				justify-content: center;
			}
			.subjects-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
		}
	}
</style>
