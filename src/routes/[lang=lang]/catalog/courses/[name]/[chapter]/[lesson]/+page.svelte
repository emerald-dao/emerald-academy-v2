<script type="ts">
	import { page } from '$app/stores';
	import type { CourseContents, CourseOverview } from '$lib/types/content/course.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';

	interface Data {
		content: ConstructorOfATypedSvelteComponent;
		contents: CourseContents;
		lesson: number;
		overview: CourseOverview;
	}

	export let data: Data;

	let routes = [
		{
			path: '/catalog',
			label: 'Catalog'
		},
		{
			path: `/catalog/${$page.params.name}`,
			label: transformUrlToHeading($page.params.name)
		}
	];
</script>

<section>
	<Breadcrumbs {routes} />
	<article>
		<svelte:component this={data.content} />
	</article>
</section>

<style type="scss">
	article {
		margin-top: var(--space-6);
	}
</style>
