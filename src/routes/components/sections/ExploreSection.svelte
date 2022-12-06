<script type="ts">
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import '@splidejs/svelte-splide/css';
	export let courses: CourseOverview[];
</script>

<section>
	<div class="container">
		<div class="main-wrapper">
			<p class="explore">EXPLORE OUR CONTENT</p>
			<h3>Flow free educational resources</h3>
		</div>

		<div class="content">
			<div class="sidebar" />

			<div class="content">
				{#each courses as course}
					<ContentCard overview={course} />
				{/each}
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
	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
		margin-bottom: 3em;
	}
	h3 {
		margin-bottom: 3rem;
		font-weight: var(--font-weight-bold);
	}
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
