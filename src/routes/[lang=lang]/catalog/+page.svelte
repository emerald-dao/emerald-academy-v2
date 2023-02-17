<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import { page } from '$app/stores';

	export let data: Data;

	interface Data {
		content: Overview[];
	}

	let filters: Filter[] = [
		{
			title: 'TYPE_OF_CONTENT',
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
			title: 'SUBJECT',
			filterElement: [
				{
					title: 'Backend',
					icon: 'icon',
					slug: SubjectsEnum.Backend
				}
			],
			filterBucket: []
		},
		{
			title: 'EXPERTISE',
			filterElement: [
				{
					title: 'Beginner',
					icon: 'icon',
					slug: ExpertiseEnum.beginner
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

	$: $LL && (filters = filters);
</script>

<section class="container">
	<h1 class="w-medium heading">Catalog</h1>
	<h5 class="w-medium heading">What would you like to learn?</h5>
	<div class="first-wrapper">
		<div class="roadmap-wrapper">
			<a href={`${$page.url.href}/${data.subjectCadence.name}`}>
				<h4>{`Learn ${firstCapital(data.subjectCadence.name)}`}</h4>

				<p>{firstCapital(data.subjectCadence.description)}</p>
			</a>
		</div>
		<div class="roadmap-wrapper">
			<a href={`${$page.url.href}/${data.subjectDappDevelopment.name}`}>
				<h4>{`Learn ${firstCapital(data.subjectDappDevelopment.name)}`}</h4>
				<p>{data.subjectDappDevelopment.description}</p>
			</a>
		</div>
	</div>
	<div class="second-wrapper">
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
	</div>
</section>

<style type="scss">
	h5 {
		margin-top: var(--space-10);
	}

	.first-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-10);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-10);
		}

		a {
			display: flex;
			flex-direction: column;
			gap: var(--space-5);
			text-decoration: none;

			h4 {
				text-decoration: underline;

				&:hover {
					text-decoration: none;
				}
			}

			p {
				color: var(--clr-text-main);
			}
		}

		.roadmap-wrapper {
			display: flex;
			flex-direction: column;
			border: var(--border-width-primary) var(--clr-border-primary) solid;
			border-radius: var(--radius-8);
			padding: var(--space-11);
		}
	}

	.second-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		margin-top: var(--space-12);

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
			padding-bottom: var(--space-4);

			@include mq(medium) {
				padding-block: var(--space-9);
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
