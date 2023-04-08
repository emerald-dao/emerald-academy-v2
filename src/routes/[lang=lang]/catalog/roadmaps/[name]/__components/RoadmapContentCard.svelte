<script type="ts">
	import { locale, LL } from '$i18n/i18n-svelte';
	import { Label } from '@emerald-dao/component-library';
	import type { RoadmapContent } from '$lib/types/content/roadmap.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';

	export let roadmapContent: RoadmapContent;
	export let i: number;

	let url =
		roadmapContent.contentType === ContentTypeEnum.External
			? roadmapContent.url
			: `/${$locale}/${roadmapContent.url}`;
</script>

<a href={url} target="_blank" rel="noreferrer" class="card-primary">
	<div class="row-4 align-center">
		<div class="number-wrapper">
			{i + 1}
		</div>
		<div class="column-2">
			<h4 class="h5">{roadmapContent.title}</h4>
			<p class="small">{roadmapContent.excerpt}</p>
		</div>
	</div>
	<div class="type-wrapper">
		<ContentLabel type={roadmapContent.contentType} color="primary">
			{$LL[roadmapContent.contentType]()}
		</ContentLabel>
		<Label color="neutral" hasBorder={false} size="small">{roadmapContent.duration}</Label>
	</div>
	<!-- <div class="subjects-wrapper">
		{#each roadmapContent.subjects as sub}
			<ContentLabel type={sub} color="neutral">
				{sub}
			</ContentLabel>
		{/each}
	</div> -->
</a>

<style type="scss">
	.card-primary {
		margin-bottom: var(--space-4);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		color: var(--clr-text-main);

		@include mq(small) {
			display: grid;
			grid-template-columns: 3fr 2fr;
			justify-content: space-between;
			gap: var(--space-2);
			align-items: center;
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

		.number-wrapper {
			background-color: var(--clr-neutral-badge);
			border-radius: 50%;
			width: 2.5rem;
			height: 2.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--clr-text-main);
			border: 0.5px solid var(--clr-border-primary);
		}

		// .subjects-wrapper {
		// 	display: flex;
		// 	flex-direction: row;

		// 	@include mq(small) {
		// 		justify-content: center;
		// 	}
		// }
	}
</style>
