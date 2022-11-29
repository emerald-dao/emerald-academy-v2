<script type="ts">
	import { Card } from '$atoms';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Column, Row } from '@mateoroldos/svelte.bones';
	export let overview: Overview;
</script>

<a href={`/catalog/${overview.slug}`} data-sveltekit-prefetch>
	<div class="card-primary">
		<Column gap="small" align="flex-start">
			<span>{overview.contentType}</span>
			<h3>
				{overview.title}
			</h3>
			<Column gap="small" align="flex-start">
				<Row>
					<span>
						{overview.metadata.expertise}
					</span>
					<span>
						{overview.metadata.duration}
					</span>
				</Row>
				<span>
					{overview.excerpt}
				</span>
			</Column>
		</Column>
	</div>
</a>

<style type="scss">
	.card-primary {
		border-radius: var(--radius-3);
	}
</style>
