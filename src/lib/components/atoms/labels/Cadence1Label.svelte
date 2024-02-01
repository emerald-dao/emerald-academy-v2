<script lang="ts">
	import { Label } from '@emerald-dao/component-library';

	export let size: 'x-small' | 'small' = 'x-small';
</script>

<Label {size} iconLeft="tabler:alert-triangle" hasBorder={false} color="alert">Cadence 1.0</Label>
