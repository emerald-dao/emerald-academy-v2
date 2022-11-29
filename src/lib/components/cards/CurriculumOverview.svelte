<script type="ts">
	import type { Overview } from '$lib/types/content-overview.interface';
	import { Card } from '$atoms';
	export let overview: Overview;
</script>

<Card width="100%" padding="3">
	<h5>CURRICULUM OVERVIEW</h5>
	{#each overview.weeks as week}
		<p class="p">Week {overview.weeks.indexOf(week) + 1}</p>
		<p>{week.excerpt}</p>
	{/each}
	<br />
	<h5>PREREQUISITES</h5>
	{#each overview.prerequisites as pre}
		<p>{pre}</p>
	{/each}
</Card>

<style>
	.p {
		color: var(--clr-primary-main);
	}
	h5 {
		margin: 0 0 5% 0;
	}
</style>
