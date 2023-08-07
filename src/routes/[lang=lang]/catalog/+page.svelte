<script type="ts">
	import { firstCapital as uppercaseFirstLetter } from '$lib/utilities/dataTransformation/firstCapital';
	import { page } from '$app/stores';
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import Icon from '@iconify/svelte';
	import CatalogSection from '$lib/features/catalog-list/CatalogSection.svelte';
	import { Seo } from '@emerald-dao/component-library';
	import { LL } from '$i18n/i18n-svelte';

	export let data;
</script>

<section>
	<div class="container">
		<h1 class="w-medium">{$LL.CATALOG()}</h1>
		<h5>What would you like to learn?</h5>
		<div class="first-wrapper">
			{#each data.featuredSubjects as subject}
				<p>{JSON.stringify(subject)}</p>
				<a class="card column-2" href={`${$page.url.href}/${transformHeadingToUrl(subject.name)}`}>
					<div class="row-3 align-center">
						<div class="subject-icon">
							<Icon icon={subject.icon} width="1.3rem" color="var(--clr-tertiary-main)" />
						</div>
						<h4>{`${$LL.LEARN()} ${subject.title}`}</h4>
					</div>
					<p>{uppercaseFirstLetter(subject.description)}</p>
				</a>
			{/each}
		</div>
	</div>
</section>
<CatalogSection contentList={data.content} />

<Seo
	title={`Catalog | Emerald Academy`}
	description="Complete catalog of all courses, bootcamps, roadmaps and subjects offered at Emerald Academy"
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style type="scss">
	section {
		border-bottom: 0.5px var(--clr-border-primary) solid;

		a {
			text-decoration: none;
		}

		h5 {
			margin-block: var(--space-12) var(--space-4);
			color: var(--clr-text-primary);
		}

		.first-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-10);

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: var(--space-10);
			}

			.subject-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 50%;
				background-color: var(--clr-tertiary-badge);
			}

			p {
				color: var(--clr-text-main);
			}
		}
	}
</style>
