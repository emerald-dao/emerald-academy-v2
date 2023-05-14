<script type="ts">
	import Icon from '@iconify/svelte';

	export let walletAddress: string;
	export let name: string;
</script>

<svelte:head>
	<script src="http://localhost:5173/index.js"></script>
</svelte:head>

<div
	data-address={walletAddress}
	data-amount="5.0"
	data-name="Joe Schmo"
	data-message="Thank {name} by sending them some $FLOW!"
	class="flipping-widget-custom"
	data-bg-color="#12A588"
	data-size="md"
	data-tooltip="Tip this author"
>
	<!-- <Icon icon="material-symbols:attach-money" color="var(--clr-primary-main)" /> -->
	Click me
</div>
