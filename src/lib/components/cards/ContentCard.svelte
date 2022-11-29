<script type="ts">
	import { Card } from '$atoms';
	import type { Overview } from '$lib/types/content-overview.interface';
	import { Column, Row } from '@mateoroldos/svelte.bones';
	export let overview: Overview;
</script>

<a href={`/catalog/${overview.slug}`} data-sveltekit-prefetch>
	<Card width="fit-content">
		<Column gap="small" align="flex-start">
			<span>{overview.contentType}</span>
			<h3>
				{overview.title}
			</h3>
			<Column gap="small" align="flex-start">
				<Row>
					<span>
						{overview.level}
					</span>
					<span>
						{overview.weeks.length} weeks
					</span>
				</Row>
				<span>
					{overview.excerpt}
				</span>
			</Column>
		</Column>
	</Card>
</a>

<style type="scss">
</style>
