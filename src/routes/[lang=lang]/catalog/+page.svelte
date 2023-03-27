<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { firstCapital as uppercaseFirstLetter } from '$lib/utilities/dataTransformation/firstCapital';
	import { page } from '$app/stores';
	import type { SubjectOverview } from '$lib/types/content/subjects.interface';
	import type { Locale } from 'typesafe-i18n/types/runtime/src/core.mjs';
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import Icon from '@iconify/svelte';

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
			filterBucket: [] as SubjectsEnum[]
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

	const filteredContent = (_filters: Filter[]) => {
		const contents = data.content.filter((content) => {
			return (
				(_filters[0].filterBucket.includes(content.contentType) ||
					_filters[0].filterBucket.length < 1) &&
				(_filters[1].filterBucket.some((item) =>
					content.metadata.subjects.includes(item as SubjectsEnum)
				) ||
					_filters[1].filterBucket.length < 1) &&
				(_filters[2].filterBucket.includes(content.metadata.expertise) ||
					_filters[2].filterBucket.length < 1)
			);
		});

		return contents;
	};

	$: contents = filteredContent(filters);
</script>

<section class="primary-section">
	<div class="container">
		<h1 class="w-medium">Catalog</h1>
		<h5>What would you like to learn?</h5>
		<div class="first-wrapper">
			{#each data.featuredSubjects as subject}
				<a class="card column-2" href={`${$page.url.href}/${transformHeadingToUrl(subject.name)}`}>
					<div class="row-3 align-center">
						<div class="subject-icon">
							<Icon icon={subject.icon} width="1.3rem" color="var(--clr-tertiary-main)" />
						</div>
						<h4>{`Learn ${uppercaseFirstLetter(subject.name)}`}</h4>
					</div>
					<p>{uppercaseFirstLetter(subject.description)}</p>
				</a>
			{/each}
		</div>
	</div>
</section>
<section class="second-wrapper container">
	<div class="sidebar"><Filters bind:filters /></div>
	<div class="main">
		{#if contents.length > 0}
			{#each contents as content}
				<ContentCard overview={content} />
			{/each}
		{:else}
			<span><em>No content found</em></span>
		{/if}
	</div>
</section>

<style type="scss">
	.primary-section {
		border-bottom: 0.5px var(--clr-border-primary) solid;
	}

	h5 {
		margin-block: var(--space-12) var(--space-4);
		color: var(--clr-text-primary);
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

		.subject-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background-color: var(--clr-tertiary-badge);
		}

		p {
			color: var(--clr-text-main);
		}
	}

	.second-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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
			border-bottom: 0.5px var(--clr-neutral-primary) solid;
			height: fit-content;
			padding-bottom: var(--space-4);
			padding-right: var(--space-4);

			@include mq(medium) {
				padding-block: var(--space-9);
				gap: var(--space-10);
				border-bottom: none;
				border-right: 0.5px var(--clr-border-primary) solid;
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

			span:has(em) {
				margin-top: var(--space-8);
				color: var(--clr-text-off);
			}
		}
	}
</style>
