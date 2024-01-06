<script>
	import Icon from '@iconify/svelte';
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div class="title-wrapper">
		<h3>Join us on Discord</h3>
	</div>
	<div class="logo-wrapper">
		<a
			href="https://discord.com/invite/emerald-city-906264258189332541"
			target="_blank"
			rel="noreferrer"
		>
			<Icon icon="tabler:brand-discord" width="92" color="#707070" />
		</a>
	</div>

	<StepButton active />
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		.title-wrapper {
			margin-bottom: 3em;
		}

		.logo-wrapper {
			margin-bottom: 1em;
		}
	}
</style>
