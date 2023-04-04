<script type="ts">
	import Icon from '@iconify/svelte';

	export let question: string;
	export let open: boolean;
</script>

<div class="questions row-space-between">
	<h5 class="heading">{question}</h5>
	<div class="icon-wrapper" class:rotate-180={open}>
		<Icon icon="tabler:chevron-down" color="var(--clr-text-off)" />
	</div>
</div>

<style type="scss">
	.questions {
		cursor: pointer;
		padding-block: var(--space-6);
		border-top: 1px var(--clr-neutral-badge) solid;
		padding-inline: var(--space-4);

		h5 {
			margin: 0;
			font-size: var(--font-size-2);
		}
	}

	.icon-wrapper {
		transition: 0.2s;
	}

	.rotate-180 {
		transform: rotate(180deg);
	}
</style>
