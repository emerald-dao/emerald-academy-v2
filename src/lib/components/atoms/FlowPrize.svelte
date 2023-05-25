<script type="ts">
	import Icon from '@iconify/svelte';

	export let completed: boolean = false;
	export let prize: number = 0;
</script>

<div class="prize-wrapper">
	{#if completed}
		<Icon icon="fluent-mdl2:completed-solid" color="var(--clr-primary-main)" />
		Completed
	{:else if prize > 0}
		<Icon icon="mdi:selection-ellipse" color="var(--clr-primary-main)" />
		{prize} $FLOW
	{:else}
		<Icon icon="mdi:selection-ellipse" color="var(--clr-primary-main)" />
		Free
	{/if}
</div>

<style type="scss">
	.prize-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--clr-primary-main);
	}
</style>
