<script type="ts">
	import { page } from '$app/stores';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';

	export let data;
	export let headings;

	console.log(headings);

	let routes = [
		{
			path: '/catalog',
			label: 'Catalog'
		},
		{
			path: `/catalog/${$page.params.courseName}`,
			label: transformUrlToHeading($page.params.courseName)
		}
	];
</script>

<div class="container-small">
	<Breadcrumbs {routes} />
	<article>
		<svelte:component this={data.content} />
	</article>
</div>

<style type="scss">
	article {
		margin-top: var(--space-6);
	}
</style>
