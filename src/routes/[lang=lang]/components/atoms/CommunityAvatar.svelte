<script type="ts">
	import Icon from '@iconify/svelte';

	export let imageSrc: string;
	export let icon: string;
</script>

<div>
	<img src={imageSrc} alt="Community avatar" />
	<div class="icon-wrapper">
		<Icon {icon} width="20px" />
	</div>
</div>

<style type="scss">
	div {
		height: 45px;
		width: 45px;
		position: relative;

		img {
			border-radius: 50%;
		}

		.icon-wrapper {
			position: absolute;
			bottom: -2px;
			right: -2px;
			width: 16px;
			height: 16px;
			border-radius: 50%;
		}
	}
</style>
