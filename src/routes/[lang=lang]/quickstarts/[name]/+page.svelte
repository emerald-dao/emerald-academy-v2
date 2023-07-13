<script type="ts">
	import { Breadcrumbs, Seo } from '@emerald-dao/component-library';
	import { page } from '$app/stores';
	import LL from '$i18n/i18n-svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import TableOfContent from '$lib/components/mdsvex/TableOfContent.svelte';
	import { setContext } from 'svelte';

	export let data;

	$: routes = [
		{
			path: `/${$page.params.lang}/quickstarts`,
			label: $LL[ContentTypeEnum.Quickstart]()
		},
		{
			path: `/${$page.params.lang}/quickstarts/${$page.params.name}`,
			label: `${data.overview.title}`
		}
	];

	$: setContext('author-context', data.overview.author);
</script>

<section class="container-medium">
	<div class="main-wrapper">
		<div class="title-wrapper">
			<Breadcrumbs {routes} />
			<ContentIntro overview={data.overview} showBreadcrumbs={false} />
		</div>
		<article>
			<div class="readme-wrapper">
				<svelte:component this={data.readme} />
			</div>
		</article>
	</div>
	<div class="toc-wrapper">
		<TableOfContent headings={data.metadata.headings} contentType={ContentTypeEnum.Quickstart} />
	</div>
</section>

<Seo
	title={`${data.overview.title} | Quickstart | Emerald Academy`}
	description="Some codes for quick implementation"
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 2fr !important;
			gap: var(--space-10);
		}

		.title-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-8);
		}

		.main-wrapper {
			article {
				margin-top: var(--space-9);
				max-width: 85ch;
				min-width: 85ch;
			}
		}

		.toc-wrapper {
			display: none;

			@include mq(medium) {
				display: block;
				position: sticky;
				top: 140px;
				height: fit-content;
			}
		}
	}
</style>
