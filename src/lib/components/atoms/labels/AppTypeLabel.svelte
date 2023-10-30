<script type="ts">
	import { AppTypeEnum } from '$lib/types/content/quickstart.interface';
	import { Label } from '@emerald-dao/component-library';

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

<Label
	size="small"
	color="transparent"
	iconLeft={tablerIcon}
	hasBorder={false}
	iconColor={tablerColor}
>
	{type}
</Label>
