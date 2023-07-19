<script type="ts">
	import { page } from '$app/stores';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs, Seo } from '@emerald-dao/component-library';

	export let data;

	$: routes = [
		{
			path: `/${$page.params.lang}/cadence-by-example`,
			label: 'Cadence by Example'
		},
		{
			path: `/${$page.params.lang}/cadence-by-example/${data.slug}`,
			label: transformUrlToHeading(data.meta.title)
		}
	];
</script>

<Breadcrumbs {routes} />
<article>
	<svelte:component this={data.content} />
</article>

<Seo
	title={`${data.meta.title} | Cadence example | Emerald Academy`}
	description="Basic Cadence code examples"
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	article {
		margin-top: var(--space-6);
	}
</style>
