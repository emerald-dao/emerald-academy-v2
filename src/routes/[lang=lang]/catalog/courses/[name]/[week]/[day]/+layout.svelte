<script type="ts">
	import type { CourseData } from '$lib/types/content/course.interface';

	export let data: CourseData;
</script>

<section class="container-large">
	<div class="sidebar">
		<p>Course Overview</p>
		{#each Object.values(data.contents) as weekContent, index}
			<div class="column-2">
				<p class="week">Week {index + 1}</p>
				{#each weekContent as day}
					<a href={`/${day.slug}`} class="header-link">
						{day.metadata.title}
					</a>
				{/each}
			</div>
		{/each}
	</div>

	<slot />
</section>

<style type="scss">
	.container-large {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 4fr;
			gap: var(--space-14);
		}
	}

	.sidebar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: var(--space-4);
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		height: fit-content;
		padding-block: var(--space-8);

		@include mq(medium) {
			flex-direction: column;
			justify-content: flex-start;
			border-right: var(--border-width-primary) var(--clr-border-primary) solid;
			border-bottom: none;
			padding-right: var(--space-1);
			position: sticky;
			top: 100px;
			gap: var(--space-8);
		}
	}

	.week {
		color: var(--clr-text-off);
	}
</style>
