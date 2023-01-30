<script type="ts">
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';

	export let data: Data;

	interface Data {
		content: Overview[];
	}

	let filters: Filter[] = [
		{
			title: 'Type of Content',
			filterElement: [
				{
					title: 'Live Bootcamp',
					icon: 'icon',
					slug: ContentTypeEnum.Bootcamp
				},
				{
					title: 'Courses',
					icon: 'icon',
					slug: ContentTypeEnum.Course
				},
				{
					title: 'Roadmap',
					icon: 'icon',
					slug: ContentTypeEnum.Roadmap
				}
			],
			filterBucket: []
		},
		{
			title: 'Subject',
			filterElement: [
				{
					title: 'Backend',
					icon: 'icon',
					slug: SubjectsEnum.Backend
				},
				{
					title: 'Frontend',
					icon: 'icon',
					slug: SubjectsEnum.Frontend
				}
			],
			filterBucket: []
		},
		{
			title: 'Expertise',
			filterElement: [
				{
					title: 'Begginer',
					icon: 'icon',
					slug: ExpertiseEnum.begginer
				},
				{
					title: 'Intermediate',
					icon: 'icon',
					slug: ExpertiseEnum.intermediate
				},
				{
					title: 'Advanced',
					icon: 'icon',
					slug: ExpertiseEnum.advanced
				}
			],
			filterBucket: []
		}
	];
</script>

<section class="container">
	<div class="sidebar"><Filters bind:filters /></div>
	<div class="main">
		{#each data.content as content}
			{#if filters[0].filterBucket.includes(content.contentType) || filters[0].filterBucket.length < 1}
				{#if filters[1].filterBucket.some( (item) => content.metadata.subjects.includes(item) ) || filters[1].filterBucket.length < 1}
					{#if filters[2].filterBucket.includes(content.metadata.expertise) || filters[2].filterBucket.length < 1}
						<ContentCard overview={content} />
					{/if}
				{/if}
			{/if}
		{/each}
	</div>
</section>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: var(--space-10);
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			gap: var(--space-4);
			border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);

			@include mq(medium) {
				gap: var(--space-10);
				border-bottom: none;
				border-right: var(--border-width-primary) var(--clr-border-primary) solid;
				position: sticky;
				top: 50px;
			}
		}

		.main {
			display: flex;
			flex-direction: column;
			gap: var(--space-10);

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--space-10);
			}
		}
	}
</style>
