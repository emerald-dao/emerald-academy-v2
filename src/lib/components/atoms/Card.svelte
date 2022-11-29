<script type="ts">
	export let background: 'primary' | 'secondary' = 'primary';
	export let width: 'fit-content' | '100%' = 'fit-content';
	export let padding: number = 4;
	export let borderRadius: number = 1;
</script>

<div
	class={`background-${background}`}
	style="{`width: ${width}; padding: ${padding}rem; border-radius: ${borderRadius}rem`};"
>
	<slot />
</div>

<style type="scss">
	.background-primary {
		background-color: var(--clr-surface-primary);
	}

	.background-secondary {
		background-color: var(--clr-neutral-900);
	}
</style>
