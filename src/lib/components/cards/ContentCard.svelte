<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import CurriculumOverview from './CurriculumOverview.svelte';
	export let overview: Overview;
	console.log(overview);
</script>

<a href={`/catalog/${overview.slug}`}>
	<div class="card-primary">
		<div class="data">
			<div class="meta">
				<ContentLabel type={overview.contentType} color="primary"
					>{overview.contentType}</ContentLabel
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

	p {
		color: var(--clr-text-main);
	}
</style>
