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
	$: contents = [
		{ type: ContentTypeEnum.Course, icon: icon.Course, contents: courses },
		{ type: ContentTypeEnum.Bootcamp, icon: icon.Bootcamp, contents: bootcamps },
		{ type: ContentTypeEnum.Roadmap, icon: icon.Roadmap, contents: roadmaps }
	];

	const clickedContent = (i: number) => {
		activeContent = i;
	};
</script>

{#if courses.length > 0 || bootcamps.length > 0 || roadmaps.length > 0}
	<section class="container">
		<div class="title-wrapper">
			<div class="tagline">{$LL.EXPLORE_TAGLINE()}</div>
			<h3>{$LL.EXPLORE_H1()}</h3>
		</div>
		<div class="content-wrapper">
			<div class="sidebar">
				{#each contents as content, i}
					{#if content.contents.length > 0}
						<div
							on:click={() => clickedContent(i)}
							class="sidebar-link"
							class:active={activeContent === i}
						>
							<Icon icon={content.icon} />{firstCapital(content.type)}
						</div>
					{/if}
				{/each}
			</div>
			<div class="cards-wrapper">
				{#if ContentTypeEnum.Course === contents[activeContent].type}
					{#each courses as course}
						<ContentCard overview={course} />
					{/each}
				{:else if ContentTypeEnum.Bootcamp === contents[activeContent].type}
					{#each bootcamps as boot}
						<ContentCard overview={boot} />
					{/each}
				{:else if ContentTypeEnum.Roadmap === contents[activeContent].type}
					{#each roadmaps as road}
						<ContentCard overview={road} />
					{/each}
				{/if}
			</div>
		</div>
	</section>
{/if}

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
