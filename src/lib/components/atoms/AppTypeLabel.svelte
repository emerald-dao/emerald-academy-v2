<script type="ts">
	import { AppTypeEnum } from '$lib/types/content/quickstart.interface';
	import Icon from '@iconify/svelte';

	export let type: AppTypeEnum;

	function getTablerIcon() {
		if (type === AppTypeEnum.SvelteKit) {
			return 'tabler:brand-svelte';
		}
		if (type === AppTypeEnum.NextJS) {
			return 'tabler:brand-react';
		}
		return 'tabler:brand-swift';
	}

	function getTablerColor() {
		if (type === 'SvelteKit') {
			return '#ff4500';
		}
		if (type === 'Next.js') {
			return '#00abfb';
		}
		return '#00abfb';
	}
</script>

<div class="row-2">
	<Icon icon={getTablerIcon()} color={getTablerColor()} />
	<p class="xsmall w-medium">
		{type}
	</p>
</div>

<style lang="scss">
	.row-2 {
		align-items: center;

		img {
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}
		p {
			margin-top: 0;
		}
	}
</style>
