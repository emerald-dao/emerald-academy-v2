<script type="ts">
	import { Label } from '@emerald-dao/component-library';
	import type { RoadmapContent } from '$lib/types/content/roadmap.interface';

	export let roadmapContent: RoadmapContent;
</script>

<a href={`/${roadmapContent.url}`}>
	<div class="card-primary">
		<div class="grid-wrapper">
			<div class="title-wrapper">
				<h4 class="w-medium">{roadmapContent.title}</h4>
				<p>{roadmapContent.excerpt}</p>
			</div>
			<div class="type-wrapper">
				<Label color="primary">{roadmapContent.contentType}</Label>
				<Label color="neutral">{roadmapContent.duration}</Label>
			</div>
			<div class="subjects-wrapper">
				{#each roadmapContent.subjects as sub}
					<Label color="transparent">{sub}</Label>
				{/each}
			</div>
		</div>
	</div>
</a>

<style type="scss">
	a {
		text-decoration: none;

		.card-primary {
			margin-bottom: var(--space-4);

			.grid-wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--space-6);

				@include mq(small) {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					justify-content: space-between;
					gap: var(--space-2);
				}

				.type-wrapper {
					display: flex;
					flex-direction: column;
					gap: var(--space-2);
					height: fit-content;
					justify-content: center;

					@include mq(small) {
						flex-direction: row;
					}
				}
				.subjects-wrapper {
					display: flex;
					flex-direction: row;

					@include mq(small) {
						justify-content: center;
					}
				}
			}
		}
	}
</style>
