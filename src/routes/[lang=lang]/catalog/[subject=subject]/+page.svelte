<script type="ts">
	import { page } from '$app/stores';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import CatalogSection from '$lib/features/catalog-list/CatalogSection.svelte';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import { Seo } from '@emerald-dao/component-library';
	import { LL } from '$i18n/i18n-svelte';

	export let data;

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/${$page.params.lang}/catalog/${$page.params.subject}`,
			label: `${data.overview.title}`
		}
	];
</script>

<section>
	<div class="container column-15">
		<div class="title-wrapper">
			<Breadcrumbs {routes} />
			<h1>{data.overview.title}</h1>
			<p>
				{data.overview.description}
			</p>
		</div>
		{#if data.featuredRoadmap}
			<div class="roadmap-wrapper">
				<h5>{$LL.NEW_TO()} {data.overview.title}? {$LL.START_HERE()}</h5>
				<ContentCard overview={data.featuredRoadmap} />
			</div>
		{/if}
		<div class="sidebar column-3">
			<h5>Shortcuts</h5>
			<ul>
				{#each data.overview.shortcuts as shortcut}
					<li>
						<a href={shortcut.url} target="_blank" rel="noreferrer" class="header-link"
							>{shortcut.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
<CatalogSection
	contentList={data.content}
	subjectFilter={false}
	title={`All ${data.overview.title} contents`}
/>

<Seo
	title={`${data.overview.title} | Subject | Emerald Academy`}
	description={data.overview.description}
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	section {
		border-bottom: 0.5px var(--clr-border-primary) solid;

		.container {
			display: grid;
			grid-template-rows: repeat(3, auto);
			grid-template-areas: 'top' 'middle' 'bottom';
			gap: var(--space-10);

			@include mq(medium) {
				grid-template-columns: 3fr 1fr;
				grid-template-rows: repeat(2, auto);
				grid-template-areas: 'main sidebar' 'content sidebar';
				gap: var(--space-10);
			}

			.title-wrapper {
				grid-area: top;
				width: 100%;

				@include mq(medium) {
					grid-area: main;
					width: 90%;
				}
				h1 {
					margin-bottom: var(--space-6);
				}
			}

			.roadmap-wrapper {
				grid-area: bottom;
				display: flex;
				flex-direction: column;
				gap: var(--space-3);
				max-width: 600px;

				@include mq(medium) {
					grid-area: content;
				}
			}

			.sidebar {
				grid-area: middle;

				@include mq(medium) {
					grid-area: sidebar;
					display: block;
					border-left: 1px var(--clr-neutral-badge) solid;
					height: fit-content;
					padding-block: var(--space-9);
					padding-left: var(--space-5);
					position: sticky;
					top: 120px;
				}

				h5 {
					margin: 0;
				}

				ul {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				li {
					margin: var(--space-4) 0;
					text-indent: -0.1em;

					&::before {
						content: '•';
						padding-right: var(--space-2);
						color: var(--clr-tertiary-main);
					}
				}
			}
		}
	}

	h5 {
		margin-block: 0;
	}
</style>
