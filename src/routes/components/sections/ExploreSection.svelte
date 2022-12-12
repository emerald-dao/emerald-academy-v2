<script type="ts">
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import '@splidejs/svelte-splide/css';

	export let courses: CourseOverview[];
	export let bootcamps: BootcampOverview[];
	export let roadmaps: RoadmapOverview[];

	let typeOfContentToShow: ContentTypeEnum[] = [
		ContentTypeEnum.Course,
		ContentTypeEnum.Bootcamp,
		ContentTypeEnum.Roadmap
	];
	let activeContent: number = 0;
	const clickedContent = (i: number) => {
		activeContent = i;
		console.log(activeContent);
	};
	// console.log(typeOfContent);
	// console.log(activeContent);
	// console.log(courses.toString());
	// console.log(typeOfContent[activeContent]);
</script>

<section>
	<div class="container">
		<div class="main-wrapper">
			<p class="explore">EXPLORE OUR CONTENT</p>
			<h3>Flow free educational resources</h3>
		</div>

		<div class="content">
			<div class="sidebar">
				{#each typeOfContentToShow as type, i}
					<div on:click={() => clickedContent(i)} class="clickable-div">
						<ContentLabel {type}>{type}</ContentLabel>
					</div>
				{/each}
			</div>

			<div class="content-cards">
				{#if ContentTypeEnum.Course === typeOfContentToShow[activeContent]}
					{#each courses as course}
						<ContentCard overview={course} />
					{/each}
				{:else if ContentTypeEnum.Bootcamp === typeOfContentToShow[activeContent]}
					{#each bootcamps as boot}
						<ContentCard overview={boot} />
					{/each}
				{:else if ContentTypeEnum.Roadmap === typeOfContentToShow[activeContent]}
					{#each roadmaps as road}
						<ContentCard overview={road} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		
	}
	.explore {
		color: var(--clr-primary-main);
	}

	h3 {
		margin-bottom: 3rem;
		--font-weight: var(--font-weight-bold);
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.content-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
	}
	.clickable-div {
		cursor: pointer;
		&:hover {
			color: var(--clr-primary-main);
		}
		padding-bottom: var(--space-3);
		padding-top: var(--space-3);
	}
</style>
