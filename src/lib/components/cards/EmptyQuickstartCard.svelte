<script type="ts">
	import {
		TECHSTACK_DATA,
		type QuickstartTechstack
	} from '$lib/types/content/quickstart.interface';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let techstack: QuickstartTechstack[];
</script>

<div class="card">
	<div class="column-4">
		<h5 class="heading w-medium">{title}</h5>
		{#each techstack as tech}
			<div class="row-1">
				<Icon icon={TECHSTACK_DATA[tech].icon} color="var(--clr-text-main)" width="1.1rem" />
				<p class="small w-medium">{TECHSTACK_DATA[tech].name}</p>
			</div>
		{/each}
		<p class="small">Coming soon!</p>
	</div>
</div>

<style type="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-5);
		border-radius: var(--radius-2);
		padding: var(--space-10);
		color: var(--clr-text-main);
		width: 100%;
		opacity: 0.5;

		@include mq(medium) {
			gap: var(--space-10);
		}

		h5 {
			margin: 0;
			font-size: var(--font-size-4);
		}
	}
</style>
