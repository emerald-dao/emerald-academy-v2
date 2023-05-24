<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import ChallengeCard from './__components/ChallengeCard.svelte';

	export let data;
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL.CHALLENGE_TITLE()}</h1>
	<p>
		The below challenges & associated prize are available to the first person who submits a
		solution.
	</p>
	<p>
		To submit a solution, make a Pull Request on the <a
			href="https://github.com/emerald-dao/emerald-academy-v2"
			target="_blank"
		>
			Emerald Academy repository
		</a>, adding a 'solved' object to a challenge's README. See
		<a
			href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/cadence-challenges/example-challenge/overview.ts"
			target="_blank">this</a
		> for an example.
	</p>
	<div class="status-wrapper">
		<div class="challenges-wrapper">
			{#each data.challenges.filter((challenge) => !challenge.solved) as challenge}
				<ChallengeCard {challenge} />
			{/each}
			{#each data.challenges.filter((challenge) => challenge.solved) as challenge}
				<ChallengeCard {challenge} />
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		p {
			a {
				text-decoration: none;
			}
			@include mq(medium) {
				max-width: 40vw;
			}
		}
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
