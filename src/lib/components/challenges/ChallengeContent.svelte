<script type="ts">
	import FlowPrize from '$lib/components/atoms/FlowPrize.svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { Label } from '@emerald-dao/component-library';

	export let challenge: CadenceChallenge;
	export let card: boolean = true;
</script>

<div class="labels-wrapper" class:add-gap={card}>
	<ContentLabel type={challenge.contentType} color="primary">Challenge</ContentLabel>
	<FlowPrize completed={challenge.solved != undefined} prize={challenge.prize} />
</div>
<div class="text-wrapper">
	<h5>{challenge.title}</h5>
	<p class:clamp={card}>{challenge.description}</p>
</div>
<div class="skills">
	<p>Skills to test</p>
	<div class="skills-wrapper">
		{#each challenge.subjects as subject}
			<Label size="x-small" color="neutral" hasBorder={true}>{subject}</Label>
		{/each}
	</div>
</div>

<style type="scss">
	.labels-wrapper {
		padding: var(--space-5);
		display: flex;
		gap: var(--space-5);
	}

	.add-gap {
		justify-content: space-between;
		gap: unset;
	}

	.text-wrapper {
		padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);

		h5 {
			margin: 0;
		}

		p {
			text-decoration: none;
			color: var(--clr-text-main);
		}

		.clamp {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
	.skills {
		padding: var(--space-3) var(--space-5) var(--space-5) var(--space-5);
		p {
			text-decoration: none;
			color: var(--clr-heading-main);
		}

		.skills-wrapper {
			padding-top: var(--space-2);
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: var(--space-3);
		}
	}
</style>
