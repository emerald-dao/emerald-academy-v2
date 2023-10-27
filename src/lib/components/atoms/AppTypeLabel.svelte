<script type="ts">
	import { AppTypeEnum } from '$lib/types/content/quickstart.interface';
	import Icon from '@iconify/svelte';

	export let type: AppTypeEnum;
	let tablerIcon: string;
	let tablerColor: string;

	$: if (type) {
		if (type === AppTypeEnum.SvelteKit) {
			tablerIcon = 'tabler:brand-svelte';
			tablerColor = '#ff4500';
		} else if (type === AppTypeEnum.NextJS) {
			tablerIcon = 'tabler:brand-react';
			tablerColor = '#00abfb';
		} else {
			tablerIcon = 'tabler:brand-swift';
			tablerColor = '#00abfb';
		}
	}
</script>

<div class="row-2">
	<Icon icon={tablerIcon} color={tablerColor} />
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
