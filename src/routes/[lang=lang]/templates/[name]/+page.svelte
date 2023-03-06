<script type="ts">
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import Sidebar from '../__components/Sidebar.svelte';
	import type { Template } from '$lib/types/content/templates.interface';
	import { page } from '$app/stores';

	export let data: Data;

	interface Data {
		githubUser: any;
		readme: any;
		overview: Template;
		locale: string;
	}

	$: routes = [
		{
			path: `/${$page.params.lang}/templates`,
			label: 'Templates'
		},
		{
			path: `/${$page.params.lang}/templates/${$page.params.name}`,
			label: `${data.overview.title}`
		}
	];
</script>

<section class="container-medium">
	<div>
		<Breadcrumbs {routes} />
		<div class="template">&lt/&gt Template</div>
		<article>
			<h1 class="heading w-medium">{data.overview.title}</h1>
			<p class="w-medium">{data.overview.description}</p>
			<div class="readme-wrapper">
				<svelte:component this={data.readme} />
			</div>
		</article>
	</div>
	<Sidebar {data} />
</section>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);

		@include mq(medium) {
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

			.readme-wrapper {
				border: var(--border-width-primary) var(--clr-border-primary) solid;
				border-radius: var(--space-5);
				padding: var(--space-10);
			}
		}
	}
</style>
