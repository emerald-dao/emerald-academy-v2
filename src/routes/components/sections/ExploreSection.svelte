<script type="ts">
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import { contentTypes } from '$lib/config/contentTypes';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { icon } from '$lib/types/content/metadata/icon.enum';

	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import Icon from '@iconify/svelte';
	import '@splidejs/svelte-splide/css';

	export let courses: CourseOverview[];
	export let bootcamps: BootcampOverview[];
	export let roadmaps: RoadmapOverview[];

	let typeOfContentToShow: sideContent[] = [
		{ contentType: ContentTypeEnum.Course, icon: icon.Course },
		{ contentType: ContentTypeEnum.Bootcamp, icon: icon.Bootcamp },
		{ contentType: ContentTypeEnum.Roadmap, icon: icon.Roadmap }
	];
	interface sideContent {
		contentType: ContentTypeEnum;
		icon: icon;
	}

	let activeContent: number = 0;
	const clickedContent = (i: number) => {
		activeContent = i;
	};
</script>

<section>
	<div class="container">
		<div class="titles">
			<div class="tagline">EXPLORE OUR CONTENT</div>
			<h3>Flow free educational <br /> resources</h3>
		</div>

		<div class="content">
			<div class="sidebar">
				{#each typeOfContentToShow as type, i}
					<div
						on:click={() => clickedContent(i)}
						class="sidebar-link"
						class:active={activeContent === i}
					>
						<Icon icon={typeOfContentToShow[i].icon} />{firstCapital(type.contentType)}
					</div>
				{/each}
			</div>

			<div class="content-cards">
				{#if ContentTypeEnum.Course === typeOfContentToShow[activeContent].contentType}
					{#each courses as course}
						<ContentCard overview={course} />
					{/each}
				{:else if ContentTypeEnum.Bootcamp === typeOfContentToShow[activeContent].contentType}
					{#each bootcamps as boot}
						<ContentCard overview={boot} />
					{/each}
				{:else if ContentTypeEnum.Roadmap === typeOfContentToShow[activeContent].contentType}
					{#each roadmaps as road}
						<ContentCard overview={road} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.titles {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		text-align: center;
	}
	.sidebar-link {
		padding-bottom: var(--space-6);
	}
	.tagline {
		color: var(--clr-tertiary-main);
		margin-top: var(--space-3);
	}

	h3 {
		margin-bottom: 3rem;
		--font-weight: var(--font-weight-bold);
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	.content-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
	}
</style>
