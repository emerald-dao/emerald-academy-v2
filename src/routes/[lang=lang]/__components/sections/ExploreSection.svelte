<script type="ts">
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { icon } from '$lib/types/content/metadata/icon.enum';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import Icon from '@iconify/svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import '@splidejs/svelte-splide/css';
	import { LL } from '$i18n/i18n-svelte';

	export let courses: CourseOverview[];
	export let bootcamps: BootcampOverview[];
	export let roadmaps: RoadmapOverview[];

	let activeContent: number = 0;
	let filters = [
		{ contentType: ContentTypeEnum.Course, icon: icon.Course },
		{ contentType: ContentTypeEnum.Bootcamp, icon: icon.Bootcamp },
		{ contentType: ContentTypeEnum.Roadmap, icon: icon.Roadmap }
	];

	const clickedContent = (i: number) => {
		activeContent = i;
	};
</script>

<section class="container">
	<div class="title-wrapper">
		<div class="tagline">{$LL.EXPLORE_TAGLINE()}</div>
		<h3>{$LL.EXPLORE_H1()}</h3>
	</div>

	<div class="content-wrapper">
		<div class="sidebar">
			{#each filters as type, i}
				<div
					on:click={() => clickedContent(i)}
					class="sidebar-link"
					class:active={activeContent === i}
				>
					<Icon icon={filters[i].icon} />{firstCapital(type.contentType)}
				</div>
			{/each}
		</div>

		<div class="cards-wrapper">
			{#if ContentTypeEnum.Course === filters[activeContent].contentType}
				{#each courses as course}
					<ContentCard overview={course} />
				{/each}
			{:else if ContentTypeEnum.Bootcamp === filters[activeContent].contentType}
				{#each bootcamps as boot}
					<ContentCard overview={boot} />
				{/each}
			{:else if ContentTypeEnum.Roadmap === filters[activeContent].contentType}
				{#each roadmaps as road}
					<ContentCard overview={road} />
				{/each}
			{/if}
		</div>
	</div>
</section>

<style type="scss">
	section {
		min-height: 700px;
		.title-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-6);
			text-align: center;
			margin-bottom: var(--space-12);

			h3 {
				--font-weight: var(--font-weight-medium);
			}
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			gap: var(--space-8);
		}

		.content-wrapper {
			display: grid;
			grid-template-columns: 1fr 6fr;
			gap: var(--space-12);

			.cards-wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--space-8);

				@include mq(small) {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: var(--space-8);
				}
			}
		}
	}
</style>
