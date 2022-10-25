<script type="ts">
	import { createEventDispatcher } from 'svelte';

	export let name: string;

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
		<span>
			<slot />
		</span></label
	>
</div>

<style>
	input {
		display: none;
	}

	span {
		padding: 0.4em 0.8em;
		background-color: var(--clr-primary-main-t7);
		color: var(--clr-font-text);
		cursor: pointer;
	}

	input:checked + span {
		background-color: var(--clr-primary-main-t2);
		color: var(--clr-font-text-inverse);
	}
</style>
