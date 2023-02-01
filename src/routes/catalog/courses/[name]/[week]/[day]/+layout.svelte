<script type="ts">
	import type { CourseDay } from '$lib/types/content/course.interface';
	import { getWeeksFromCourse } from '$lib/utilities/dataTransformation/getWeeksFromCourse';

	export let data: Data;

	interface Data {
		thisCourse: CourseDay[];
	}

	let number = 0;

	const getIndex = (i: number) => {
		number = i;

		return number;
	};

	let weeks = getWeeksFromCourse(data.thisCourse);
</script>

<section>
	<div class="container-large">
		<div class="grid-wrapper">
			<div class="sidebar">
				<p>Course Overview</p>
				{#each Array(weeks) as _, index (index)}
					<div class="column">
						<p class="week">Week: {index + 1}</p>
						{#each data.thisCourse as dayInfo, i}
							{#if dayInfo.week === index + 1}
								<div
									on:click={() => getIndex(i)}
									class:selected={i === number}
									class="each-content"
								>
									<a class="menu-link" href={dayInfo.path.replace('content', 'catalog')}>
										{dayInfo.meta.title}
									</a>
								</div>
							{/if}
						{/each}
					</div>
				{/each}
			</div>

			<slot />
		</div>
	</div>
</section>

<style type="scss">
	.grid-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 4fr;
			gap: var(--space-14);
		}
	}

	.column {
		margin: 0;

		@include mq(medium) {
			margin: var(--space-5) 0;
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
			gap: 0;
		}
	}
	.menu-link {
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: var(--clr-primary-300);
		}
		color: var(--clr-text-main);
	}
	.selected {
		color: red;
	}
	.week {
		color: var(--clr-text-off);
	}
	.each-content {
		margin: var(--space-2) 0;
	}
</style>
