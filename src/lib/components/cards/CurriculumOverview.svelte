<script type="ts">
	import { Card } from '$atoms';
	import type { CourseOverview } from '$lib/types/content/course.interface';

	export let overview: CourseOverview;
</script>

<div class="card">
	<h5>CURRICULUM OVERVIEW</h5>
	{#each overview.weeks as week}
		<p class="p">Week {overview.weeks.indexOf(week) + 1}</p>
		<p>{week.excerpt}</p>
	{/each}
	<br />
	<h5>PREREQUISITES</h5>
	{#each overview.metadata.prerequisites as pre}
		<p>{pre}</p>
	{/each}
</div>
<a class="menu-link" href="/a">Hola</a>
<div class="column-4">
	<div class="a" />
	<div class="a" />
	<div class="a" />
	<div class="a" />
	<div class="a" />
	<div class="a" />
</div>

<style>
	.p {
		color: var(--clr-primary-main);
	}
	h5 {
		margin: 0 0 5% 0;
	}

	.a {
		background-color: red;
		width: 20px;
		height: 20px;
	}
</style>
