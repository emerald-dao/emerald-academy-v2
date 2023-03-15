<script type="ts">
	import { page } from '$app/stores';
	import type {
		ChapterMetadata,
		CourseContents,
		CourseOverview
	} from '$lib/types/content/course.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	interface Data {
		content: ConstructorOfATypedSvelteComponent;
		contents: CourseContents;
		lesson: number;
		overview: CourseOverview;
	}

	export let data: Data;

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Course'
		},
		{
			path: `/catalog/${$page.params.name}`,
			label: transformUrlToHeading($page.params.name)
		}
	];

	let allContents: {
		slug: string;
		metadata: ChapterMetadata;
	}[] = [];

	Object.values(data.contents).map((chapter) => {
		chapter.contents.map((lesson) => {
			allContents.push(lesson);
		});
	});
	$: previousExample = allContents[findExampleIndex - 1];
	$: nextExample = allContents[findExampleIndex + 1];

	$: findExampleIndex = allContents.findIndex(
		(obj) =>
			obj.slug ===
			`${$page.params.lang}/catalog/courses/${$page.params.name}/${$page.params.chapter}/${$page.params.lesson}`
	);
</script>

<section>
	<Breadcrumbs {routes} />
	<article>
		<svelte:component this={data.content} />
	</article>
	<div class="adjacents-wrapper">
		{#if previousExample}
			<a class="step-back each-adjacent-wrapper" href={`/${previousExample.slug}`}>
				<Icon icon="tabler:arrow-left" style="color: var(--clr-text-main);" />
				<div class="left-wrapper column-2">
					<p class="heading w-medium">
						{previousExample.metadata.title}
					</p>
				</div>
			</a>
		{/if}
		{#if nextExample}
			<a class="step-next each-adjacent-wrapper" href={`/${nextExample.slug}`}>
				<div class="column-2">
					<p class="heading w-medium">
						{nextExample.metadata.title}
					</p>
				</div>
				<Icon icon="tabler:arrow-right" style="color: var(--clr-text-main);" />
			</a>
		{/if}
	</div>
</section>

<style type="scss">
	article {
		margin-top: var(--space-6);
	}
	.adjacents-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: var(--space-11);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'start end';
			gap: var(--space-4);
		}

		a {
			text-decoration: none;
		}

		.step-back {
			grid-area: start;
		}

		.step-next {
			grid-area: end;
			margin-top: var(--space-4);

			@include mq(medium) {
				margin-top: 0;
			}
		}

		.each-adjacent-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: var(--space-5);
			padding: var(--space-4) var(--space-5);
			border-radius: var(--radius-2);
			border: var(--border-width-primary) var(--clr-border-primary) solid;

			.left-wrapper {
				text-align: end;
			}
		}
	}
</style>
