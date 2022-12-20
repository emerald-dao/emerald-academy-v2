<script type="ts">
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

	export let data: Data;
	console.log(data);

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
		}
	];
</script>

<section>
	<div class="container-large">
		<div class="sidebar column-10"><Filters bind:filters /></div>
		<div class="main">
			{#each data.content as content}
				{#if filters[0].filterBucket.includes(content.contentType) || filters[0].filterBucket.length < 1}
					{#if filters[1].filterBucket.some( (item) => content.metadata.subjects.includes(item) ) || filters[1].filterBucket.length < 1}
						<ContentCard overview={content} />
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	.container-large {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: var(--space-10);

		.sidebar {
			border-right: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);
			position: sticky;
			top: 50px;
		}

		.main {
			display: flex;
			flex-direction: column;

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--space-10);
			}
		}
	}
</style>
