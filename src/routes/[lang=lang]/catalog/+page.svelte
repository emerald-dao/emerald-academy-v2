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
	import type { SubjectOverview } from '$lib/types/content/subjects.interface';
	import type { Locale } from 'typesafe-i18n/types/runtime/src/core.mjs';
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';

	export let data: Data;

	interface Data {
		content: Overview[];
		featuredSubjects: SubjectOverview[];
		locale: Locale;
	}

	let filters: Filter[] = [
		{
			title: 'Type of content',
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
				},
				{
					icon: 'icon',
					slug: ContentTypeEnum.Blog
				}
			],
			filterBucket: []
		},
		{
			title: 'Subject',
			filterElement: Object.values(SubjectsEnum).map((sub) => {
				return {
					icon: 'icon',
					slug: sub
				};
			}),
			filterBucket: []
		},
		{
			title: 'Expertise',
			filterElement: Object.values(ExpertiseEnum).map((sub) => {
				return {
					icon: 'icon',
					slug: sub
				};
			}),
			filterBucket: []
		}
	];

	$: $LL && (filters = filters);
</script>

<section class="container">
	<h1 class="w-medium heading">Catalog</h1>
	<h5 class="w-medium heading">What would you like to learn?</h5>
	<div class="first-wrapper">
		{#each data.featuredSubjects as subject}
			<a class="card column-2" href={`${$page.url.href}/${transformHeadingToUrl(subject.name)}`}>
				<h4>{`Learn ${firstCapital(subject.name)}`}</h4>
				<p>{firstCapital(subject.description)}</p>
			</a>
		{/each}
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

		p {
			color: var(--clr-text-main);
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
