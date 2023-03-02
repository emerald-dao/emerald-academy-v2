<script type="ts">
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import { Label } from '@emerald-dao/component-library';
	export let overview: CourseOverview;
</script>

<div class="card-primary">
	<h5>Overview</h5>
	{#each overview.contents as content}
		<p class="chapter">{content.title}</p>
		<p class="excerpt">{content.duration}</p>
	{/each}
	<br />
	<p class="w-medium">Prerequisites</p>
	{#each overview.metadata.prerequisites as pre}
		<Label color="neutral">{pre}</Label>
	{/each}
</div>

<style>
	.card-primary {
		background-color: var(--clr-neutral-90);
	}
	.excerpt {
		color: var(--clr-text-off);
	}
	.chapter {
		margin-top: var(--space-8);
	}
	.w-medium {
		margin-bottom: var(--space-2);
	}
	h5 {
		margin: 0 0 5% 0;
	}
</style>
