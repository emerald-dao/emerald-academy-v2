<script type="ts">
	import type { Template } from '$lib/types/content/templates.interface';
	import { Breadcrumbs } from '@emerald-dao/component-library';

	export let data: Data;

	interface Data {
		overview: Template;
		githubUser: {};
	}

	console.log(data);
	const thisTemplateOverview = data.overview;
	const thisTemplateUser = data.githubUser;

	$: routes = [
		{
			path: '/templates',
			label: 'Templates'
		},
		{
			path: `/${thisTemplateOverview.slug}`,
			label: `${thisTemplateOverview.title}`
		}
	];
</script>

<section class="container-small">
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
