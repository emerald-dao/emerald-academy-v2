<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import ContentLabel from '../label/ContentLabel.svelte';
	import { locale } from '$i18n/i18n-svelte';

	export let overview: Overview;
</script>

<a href={`/${$locale}/catalog/${overview.slug}`}>
	<div class="card-primary">
		<ContentLabel type={overview.contentType} color="primary">
			{firstCapital(overview.contentType)}
		</ContentLabel>
		<h4>
			{overview.title}
		</h4>
		<div class="labels-wrapper">
			<Label size="x-small" iconLeft="tabler:currency-dollar" color="transparent">Free</Label>
			<Label size="x-small" iconLeft="tabler:flame" color="transparent">
				{overview.metadata.expertise}
			</Label>
			<Label size="x-small" color="transparent" iconLeft="tabler:hourglass-high">
				{overview.metadata.duration}
			</Label>
		</div>
		<p>
			{overview.excerpt}
		</p>
		<h5>Skills you'll learn</h5>
		<div class="skill-labels-wrapper">
			{#each overview.metadata.subjects as subs}
				<Label size="x-small" color="neutral">{subs}</Label>
			{/each}
		</div>
	</div>
</a>

<style type="scss">
	a {
		text-decoration: none;

		.card-primary {
			h4 {
				margin: var(--space-4) 0 var(--space-4) 0;
			}

			.labels-wrapper {
				margin-bottom: var(--space-6);
			}

			p {
				color: var(--clr-text-main);
				font-size: var(--font-size-1);
			}

			h5 {
				margin-bottom: var(--space-3);
				font-size: var(--font-size-3);
			}

			.skill-labels-wrapper,
			.labels-wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: var(--space-3);
			}
		}
	}
</style>
