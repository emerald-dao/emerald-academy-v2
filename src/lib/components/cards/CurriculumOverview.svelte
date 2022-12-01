<script type="ts">
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import { Label } from '@emerald-dao/component-library';

	export let overview: CourseOverview;
</script>

<div class="card-primary">
	<h5>Overview</h5>
	{#each overview.weeks as week}
		<p class="p">Week {overview.weeks.indexOf(week) + 1}</p>
		<p>{week.excerpt}</p>
	{/each}
	<br />
	<p class="w-medium">Prerequisites</p>
	{#each overview.metadata.prerequisites as pre}
		<Label>{pre}</Label>
	{/each}
</div>

<style>
	.card-primary {
		background-color: var(--clr-neutral-90);
	}
	.p {
		color: var(--clr-primary-main);
		margin-top: var(--space-8);
	}
	.w-medium {
		margin-bottom: var(--space-2);
	}
	h5 {
		margin: 0 0 5% 0;
	}
</style>
