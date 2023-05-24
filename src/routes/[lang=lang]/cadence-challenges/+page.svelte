<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import ChallengeCard from './__components/ChallengeCard.svelte';

	export let data;
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL.CHALLENGE_TITLE()}</h1>
	<div class="status-wrapper">
		<h2>{$LL.CHALLENGES_UNSOLVED()}</h2>
		<div class="challenges-wrapper">
			{#if data.challenges.length === 0}
				{$LL.NO_CHALLENGES_AVAILABLE()}
			{:else}
				{#each data.challenges.filter((challenge) => !challenge.solved) as challenge}
					<ChallengeCard {challenge} />
				{/each}
			{/if}
		</div>
	</div>
	<div class="status-wrapper">
		<h2>{$LL.CHALLENGES_SOLVED()}</h2>
		<div class="challenges-wrapper">
			{#if data.challenges.length === 0}
				{$LL.NO_CHALLENGES_AVAILABLE()}
			{:else}
				{#each data.challenges.filter((challenge) => challenge.solved) as challenge}
					<ChallengeCard {challenge} />
				{/each}
			{/if}
		</div>
	</div>
</section>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-15);
		.status-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-6);
		}

		.challenges-wrapper {
			display: grid;
			grid-template-columns: 0.8fr;
			justify-content: center;
			gap: var(--space-10);
			margin-top: var(--space-5);

			@include mq(small) {
				grid-template-columns: 0.65fr;
			}

			@include mq(medium) {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: var(--space-10);
			}
		}
	}
</style>
