<script type="ts">
	import {
		TECHSTACK_DATA,
		type QuickstartTechstack
	} from '$lib/types/content/quickstart.interface';
	import { Label } from '@emerald-dao/component-library';

	export let tech: QuickstartTechstack;
</script>

<Label size="small" color="transparent" iconLeft={TECHSTACK_DATA[tech].icon} hasBorder={false}>
	{TECHSTACK_DATA[tech].name}
</Label>
