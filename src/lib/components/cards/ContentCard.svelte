<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	export let overview: Overview;
	console.log(overview);
</script>

<a href={`/catalog/${overview.slug}`}>
	<div class="card-primary">
		<div class="data">
			<div class="meta">
				<ContentLabel type={overview.contentType} color="primary"
					>{firstCapital(overview.contentType)}</ContentLabel
				>

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
				<p>
					{overview.excerpt}
				</p>
				<h5>Skills you'll learn</h5>
				<div class="subs">
					{#each overview.metadata.subjects as subs}
						<Label color="neutral">{subs}</Label>
					{/each}
				</div>
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
		gap: var(--space-4);
	}
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-bottom: var(--space-3);
	}
	h3 {
		margin: var(--space-4) 0 var(--space-4) 0;
	}
	.meta {
		margin-right: var(--space-4);
	}
	.subs {
		gap: var(--space-4);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	h5 {
		margin-bottom: var(--space-3);
		--font-weight: var(--font-weight-normal);
	}
	a {
		text-decoration: none;
	}

	p {
		color: var(--clr-text-main);
	}
</style>
