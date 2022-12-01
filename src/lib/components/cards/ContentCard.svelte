<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import CurriculumOverview from './CurriculumOverview.svelte';
	export let overview: Overview;
</script>

<a href={`/catalog/${overview.slug}`} data-sveltekit-prefetch>
	<div class="card-primary">
		<div class="data">
			<div class="meta">
				{#if overview.contentType == 'course'}
					<Label iconLeft="tabler:tag">{overview.contentType}</Label>
				{:else if overview.contentType == 'bootcamp'}
					<Label iconLeft="tabler:video">{overview.contentType}</Label>
				{:else}
					<Label iconLeft="tabler:road">{overview.contentType}</Label>
				{/if}

				<h3>
					{overview.title}
				</h3>

				<div class="row">
					<Label iconLeft="tabler:currency-dollar" color="transparent">Free</Label>
					<Label iconLeft="tabler:flame" color="transparent">
						{overview.metadata.expertise}
					</Label>
					<Label color="transparent" iconLeft="tabler:hourglass-high">
						{overview.metadata.duration}
					</Label>
				</div>
				<p class="white">
					{overview.excerpt}
				</p>
			</div>
			<div class="white">
				<CurriculumOverview {overview} />
			</div>
		</div>
		<div />
	</div>
</a>

<style type="scss">
	.card-primary {
		border-radius: var(--radius-3);
	}
	.data {
		margin-bottom: var(--space-4);
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	h3 {
		margin: var(--space-4) 0 var(--space-4) 0;
	}
	.meta {
		margin-right: var(--space-4);
	}
	a {
		text-decoration: none;
	}
	.white {
		color: white;
	}
</style>
