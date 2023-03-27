<script type="ts">
	import { page } from '$app/stores';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { SubjectOverview } from '$lib/types/content/subjects.interface';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	export let data: Data;

	interface Data {
		content: Overview[];
		overview: SubjectOverview;
		featuredRoadmap: RoadmapOverview;
	}

	const subject = $page.params.subject;

	const subjectCapital = subject.charAt(0).toUpperCase() + subject.slice(1);

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/${$page.params.lang}/catalog/${$page.params.subject}`,
			label: `${subjectCapital}`
		}
	];

	let filters: Filter[] = [
		{
			title: 'Type of Content',
			filterElement: [
				{
					icon: 'icon',
					slug: ContentTypeEnum.Bootcamp
				},
				{
					icon: 'icon',
					slug: ContentTypeEnum.Course
				},
				{
					icon: 'icon',
					slug: ContentTypeEnum.Roadmap
				}
			],
			filterBucket: []
		},
		{
			title: 'Expertise',
			filterElement: [
				{
					icon: 'icon',
					slug: ExpertiseEnum.Beginner
				},
				{
					icon: 'icon',
					slug: ExpertiseEnum.Intermediate
				},
				{
					icon: 'icon',
					slug: ExpertiseEnum.Advanced
				}
			],
			filterBucket: []
		}
	];
</script>

<section>
	<div class="container column-15">
		<div class="first-section-wrapper">
			<div class="title-wrapper">
				<Breadcrumbs {routes} />
				<h1>{subjectCapital}</h1>
				<p>
					{data.overview.description}
				</p>
			</div>
			{#if data.featuredRoadmap}
				<div class="roadmap-wrapper">
					<h5>Become an expert with our full Roadmap</h5>
					<ContentCard overview={data.featuredRoadmap} />
				</div>
			{/if}
			<div class="sidebar column-3">
				<h5 class="w-medium">Shortcuts</h5>
				<ul>
					{#each data.overview.shortcuts as shortcut}
						<li>
							<a href={shortcut.url} target="_blank" rel="noreferrer" class="header-link"
								>{shortcut.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="column-10">
			<h4>Full {subject} catalog</h4>
			<div class="second-section-wrapper">
				<div class="sidebar"><Filters bind:filters /></div>
				<div class="cards">
					{#each data.content as overview}
						{#if filters[0].filterBucket.includes(overview.contentType) || filters[0].filterBucket.length < 1}
							{#if filters[1].filterBucket.some( (item) => overview.metadata.expertise.includes(item) ) || filters[1].filterBucket.length < 1}
								{#each overview.metadata.subjects as sub}
									{#if sub === SubjectsEnum.Cadence.toLowerCase()}
										<div class="catalog">
											<ContentCard {overview} />
										</div>
									{/if}
								{/each}
							{/if}
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.first-section-wrapper {
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-areas: 'top' 'middle' 'bottom';
		gap: var(--space-10);

		@include mq(medium) {
			grid-template-columns: 3fr 1fr;
			grid-template-rows: repeat(2, auto);
			grid-template-areas: 'main sidebar' 'content sidebar';
			gap: var(--space-10);
		}

		.title-wrapper {
			grid-area: top;
			width: 100%;

			@include mq(medium) {
				grid-area: main;
				width: 90%;
			}
			h1 {
				margin-bottom: var(--space-6);
			}
		}

		.roadmap-wrapper {
			grid-area: bottom;
			display: flex;
			flex-direction: column;
			gap: var(--space-3);
			max-width: 600px;

			@include mq(medium) {
				grid-area: content;
			}
		}

		.sidebar {
			grid-area: middle;

			@include mq(medium) {
				grid-area: sidebar;
				display: block;
				border-left: 0.5px var(--clr-border-primary) solid;
				height: fit-content;
				padding-block: var(--space-9);
				padding-left: var(--space-5);
				position: sticky;
				top: 120px;
			}

			h5 {
				margin: 0;
			}

			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			li {
				margin: var(--space-4) 0;
				text-indent: -0.1em;

				&::before {
					content: '•';
					padding-right: var(--space-2);
				}
			}
		}
	}

	.second-section-wrapper {
		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: var(--space-10);
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			gap: var(--space-5);
			border-bottom: 0.5px var(--clr-border-primary) solid;
			height: fit-content;
			padding-bottom: var(--space-4);

			@include mq(medium) {
				padding-block: var(--space-9);
				gap: var(--space-10);
				border-bottom: none;
				border-right: 0.5px var(--clr-border-primary) solid;
				position: sticky;
				top: 130px;
			}
		}

		.cards {
			display: flex;
			flex-direction: column;

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--space-10);
			}
		}
	}

	h5 {
		margin-block: 0;
	}
</style>
