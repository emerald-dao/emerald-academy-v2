<script type="ts">
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';

	export let data;

	$: routes = [
		{
			path: '/cadence-by-example',
			label: 'Cadence by example'
		},
		{
			path: `/catalog/${data.slug}`,
			label: transformUrlToHeading(data.meta.title)
		}
	];
</script>

<Breadcrumbs {routes} />
<article>
	<svelte:component this={data.content} />
</article>

<style type="scss">
	article {
		margin-top: var(--space-6);
	}
</style>
