<script type="ts">
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import Sidebar from '../Components/Sidebar.svelte';

	export let data;

	const thisTemplateOverview = data.overview;
	const thisReadme = data.readme;

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

<section class="container-medium">
	<div>
		<Breadcrumbs {routes} />
		<div class="template">&lt/&gt Template</div>
		<article>
			<h1 class="heading w-medium">{thisTemplateOverview.title}</h1>
			<p class="w-medium">{thisTemplateOverview.description}</p>
			<svelte:component this={thisReadme} />
		</article>
	</div>
	<Sidebar {data} />
</section>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);

		@include mq(small) {
			display: grid;
			grid-template-columns: 3fr 1fr;
			gap: var(--space-10);
		}

		.template {
			width: fit-content;
			color: var(--clr-primary-main);
			background-color: var(--clr-primary-badge);
			border: var(--border-width-primary) var(--clr-primary-main) solid;
			border-radius: var(--radius-2);
			padding: var(--space-3) var(--space-4);
			margin-top: var(--space-6);
			font-size: var(--font-size-1);
		}
		article {
			margin-top: var(--space-6);
		}
	}
</style>
