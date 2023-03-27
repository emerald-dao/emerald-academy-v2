<script type="ts">
	import { Label } from '@emerald-dao/component-library';
	import { createEventDispatcher } from 'svelte';

	export let name: string;
	export let icon: string;

	const dispatch = createEventDispatcher();

	let value: boolean;

	$: if (value === true) {
		dispatch('selected');
	} else {
		dispatch('unselected');
	}
</script>

<div>
	<label for={name}>
		<input type="checkbox" id={name} {name} bind:checked={value} />
		<Label iconLeft={icon} state={value ? 'on' : 'off'} color={value ? 'tertiary' : 'neutral'}>
			<span class="w-regular">
				<slot />
			</span>
		</Label>
	</label>
</div>

<style>
	label {
		cursor: pointer;
	}

	input {
		display: none;
	}
</style>
