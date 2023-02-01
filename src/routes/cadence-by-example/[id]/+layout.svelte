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
			<a
				class="step-back each-adjacent-wrapper"
				href={`/cadence-by-example/${previousExample.path.split('/')[3]}`}
			>
				<Icon icon="tabler:arrow-left" style="color: var(--clr-text-main);" />
				<div class="left-wrapper column-2">
					<p class="heading w-medium">
						{previousExample.meta.title}
					</p>
				</div>
			</a>
		{/if}
		{#if nextExample}
			<a
				class="step-next each-adjacent-wrapper"
				href={`/cadence-by-example/${nextExample.path.split('/')[3]}`}
			>
				<div class="column-2">
					<p class="heading w-medium">
						{nextExample.meta.title}
					</p>
				</div>
				<Icon icon="tabler:arrow-right" style="color: var(--clr-text-main);" />
			</a>
		{/if}
	</div>
</section>

<style type="scss">
	.adjacents-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: var(--space-11);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'start end';
			gap: var(--space-4);
		}

		a {
			text-decoration: none;
		}

		.step-back {
			grid-area: start;
		}

		.step-next {
			grid-area: end;
			margin-top: var(--space-4);

			@include mq(medium) {
				margin-top: 0;
			}
		}

		.each-adjacent-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
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
