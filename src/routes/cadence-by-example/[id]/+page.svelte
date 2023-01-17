<script type="ts">
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';

	export let data;

	let routes = [
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

<section class="container-small">
	<Breadcrumbs {routes} />
	<article>
		<svelte:component this={data.content} />
	</article>
</section>
