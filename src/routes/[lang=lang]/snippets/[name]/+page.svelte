<script type="ts">
	import { Breadcrumbs, Seo } from '@emerald-dao/component-library';
	import { page } from '$app/stores';
	import LL from '$i18n/i18n-svelte';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import TableOfContent from '$lib/components/mdsvex/TableOfContent.svelte';
	import { setContext } from 'svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

	export let data;

	$: routes = [
		{
			path: `/${$page.params.lang}/snippets`,
			label: $LL.SNIPPETS()
		},
		{
			path: `/${$page.params.lang}/snippets/${$page.params.name}`,
			label: `${data.overview.title}`
		}
	];

	$: setContext('metadata-context', data.metadata);
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
		<TableOfContent
			headings={data.metadata.headings}
			contentType={ContentTypeEnum.Snippet}
			externalUrl={data.overview.codeLink}
		/>
	</div>
</section>

<Seo
	title={`${data.overview.title} | Snippet | Emerald Academy`}
	description={data.overview.description}
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

				@include mq(medium) {
					min-width: 85ch;
				}
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
