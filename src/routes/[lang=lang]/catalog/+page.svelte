<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';
	import { firstCapital as uppercaseFirstLetter } from '$lib/utilities/dataTransformation/firstCapital';
	import { page } from '$app/stores';
	import type { SubjectOverview } from '$lib/types/content/subjects.interface';
	import type { Locale } from 'typesafe-i18n/types/runtime/src/core.mjs';
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import Icon from '@iconify/svelte';
	import CatalogSection from '$lib/features/catalog-list/CatalogSection.svelte';

	export let data: Data;

	interface Data {
		content: Overview[];
		featuredSubjects: SubjectOverview[];
		locale: Locale;
	}
</script>

<section>
	<div class="container">
		<h1 class="w-medium">Catalog</h1>
		<h5>What would you like to learn?</h5>
		<div class="first-wrapper">
			{#each data.featuredSubjects as subject}
				<a class="card column-2" href={`${$page.url.href}/${transformHeadingToUrl(subject.name)}`}>
					<div class="row-3 align-center">
						<div class="subject-icon">
							<Icon icon={subject.icon} width="1.3rem" color="var(--clr-tertiary-main)" />
						</div>
						<h4>{`Learn ${uppercaseFirstLetter(subject.name)}`}</h4>
					</div>
					<p>{uppercaseFirstLetter(subject.description)}</p>
				</a>
			{/each}
		</div>
	</div>
</section>
<CatalogSection contentList={data.content} />

<style type="scss">
	section {
		border-bottom: 0.5px var(--clr-border-primary) solid;

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
