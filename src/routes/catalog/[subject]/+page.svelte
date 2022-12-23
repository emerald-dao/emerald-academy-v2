<script type="ts">
	import { page } from '$app/stores';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import Filters from '$lib/components/filters/Filters.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	export let data: Data;
	console.log(data);

	interface Data {
		content: Overview[];
	}
	const subject = $page.params;
	const subjectCapital = subject.subject.charAt(0).toUpperCase() + subject.subject.slice(1);
	console.log(subjectCapital);

	let routes = [
		{
			path: `/catalog/${$page.params.subject}`,
			label: `${$page.params.subject}`
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
	<div class="container">
		<div class="title-wrapper">
			<Breadcrumbs {routes} />
			<h1>{subjectCapital}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minima ut modi, laboriosam
				voluptatum quas omnis repellendus nostrum mollitia eum enim velit blanditiis optio rem
				quidem est labore? Molestiae, autem!
			</p>
		</div>

		<h5>Become an expert with our full Roadmap</h5>
		{#each data.content as overview}
			{#if overview.title === 'Begginer Dapp Roadmap'}
				<div class="card">
					<div>
						<SpecificContentCard {overview} />
					</div>
					<div>
						<CurriculumOverview {overview} />
					</div>
				</div>
			{/if}
		{/each}

		<h5>Full {subject.subject} catalog</h5>
		<div class="main">
			<div class="sidebar column-10"><Filters bind:filters /></div>
			<div class="cards">
				{#each data.content as overview}
					{#if filters[0].filterBucket.includes(overview.contentType) || filters[0].filterBucket.length < 1}
						{#if filters[1].filterBucket.some( (item) => overview.metadata.subjects.includes(item) ) || filters[1].filterBucket.length < 1}
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
	.title-wrapper {
		width: 60%;
		h1 {
			margin-bottom: var(--space-6);
		}
	}
	.main {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: var(--space-10);
	}

	.sidebar {
		border-right: var(--border-width-primary) var(--clr-border-primary) solid;
		height: fit-content;
		padding-block: var(--space-9);
		position: sticky;
		top: 50px;
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
	.card {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 70%;
	}
	h5 {
		--font-weight: var(--font-weight-medium);
	}
</style>
