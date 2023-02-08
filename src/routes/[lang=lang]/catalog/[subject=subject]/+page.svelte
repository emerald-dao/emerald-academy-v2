<script type="ts">
	import { page } from '$app/stores';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
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
			path: `/catalog/${$page.params.subject}`,
			label: `${subjectCapital}`
		}
	];

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
					title: 'Roadmaps',
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

	console.log(data);
</script>

<section>
	<div class="container">
		<div class="first-section-wrapper">
			<div>
				<div class="title-wrapper">
					<Breadcrumbs {routes} />
					<h1>{subjectCapital}</h1>
					<p>
						{data.overview.description}
					</p>
				</div>

				<h5 class="w-medium">Become an expert with our full Roadmap</h5>
				<div class="card">
					<div>
						<ContentIntro overview={data.featuredRoadmap} />
					</div>
					<div>
						<CurriculumOverview overview={data.featuredRoadmap} />
					</div>
				</div>
			</div>
			<div class="sidebar column-3">
				<h5 class="w-medium">Shortcuts</h5>
				<ul>
					{#each data.overview.shortcuts as shortcut}
						<li><a href={shortcut.url} target="_blank" rel="noreferrer">{shortcut.name}</a></li>
					{/each}
				</ul>
			</div>
		</div>

		<h5>Full {subject} catalog</h5>
		<div class="second-section-wrapper">
			<div class="sidebar column-10"><Filters bind:filters /></div>
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
</section>

<style type="scss">
	.first-section-wrapper {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: var(--space-10);

		.title-wrapper {
			width: 90%;
			h1 {
				margin-bottom: var(--space-6);
			}
		}

		.card {
			display: grid;
			grid-template-columns: 2fr 1.5fr;
			width: 90%;
		}

		.sidebar {
			border-top-left-radius: var(--space-6);
			border-bottom-left-radius: var(--space-6);
			border-left: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);
			padding-left: var(--space-5);
			position: sticky;
			top: 80px;

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
				text-indent: -0.7em;

				&::before {
					content: '•';
					color: var(--clr-primary-300);
					padding-right: var(--space-2);
				}
			}

			a {
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.second-section-wrapper {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: var(--space-10);

		.sidebar {
			border-right: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);
			position: sticky;
			top: 70px;
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
</style>