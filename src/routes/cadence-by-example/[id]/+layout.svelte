<script type="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let data;

	$: previousExample = data.content[findExampleIndex - 1];
	$: nextExample = data.content[findExampleIndex + 1];

	$: findExampleIndex = data.content.findIndex(
		(obj) => obj.path === `/content/cadenceByExample/${$page.params.id}`
	);
</script>

<section class="container-small">
	<slot />
	<div class="adjacents-wrapper">
		{#if previousExample}
			<a href={`/cadence-by-example/${previousExample.path.split('/')[3]}`}>
				<div class="each-adjacent-wrapper">
					<Icon icon="tabler:arrow-left" style="color: var(--clr-text-main);" />
					<div class="left-wrapper column-2">
						<p class="heading w-medium">
							{previousExample.meta.title}
						</p>
						<p class="text small">
							{previousExample.meta.excerpt}
						</p>
					</div>
				</div>
			</a>
		{/if}
		{#if nextExample}
			<a href={`/cadence-by-example/${nextExample.path.split('/')[3]}`}>
				<div class="each-adjacent-wrapper">
					<div class="column-2">
						<p class="heading w-medium">
							{nextExample.meta.title}
						</p>
						<p class="text small">
							{nextExample.meta.excerpt}
						</p>
					</div>
					<Icon icon="tabler:arrow-right" style="color: var(--clr-text-main);" />
				</div>
			</a>
		{/if}
	</div>
</section>

<style type="scss">
	.adjacents-wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: var(--space-11);

		a {
			text-decoration: none;
		}

		.each-adjacent-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: var(--space-5);
			padding: var(--space-4) var(--space-5);
			border-radius: var(--radius-2);
			border: var(--border-width-primary) var(--clr-border-primary) solid;

			.left-wrapper {
				text-align: end;
			}
		}
	}
</style>
