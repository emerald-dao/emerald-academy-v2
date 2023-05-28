<script type="ts">
	import { overview } from '$lib/content/bootcamps/beginner-cadence/en/overview';
	import ChallengePageCard from '../__components/ChallengePageCard.svelte';
	import ChallengeSolvedCard from '../__components/ChallengeSolvedCard.svelte';

	export let data;
</script>

<div
	class="background"
	style={`background: linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%),
	no-repeat url(${data.overview.image}); background-size: cover; background-position-y: 25%;`}
>
	<div class="container-small">
		<ChallengePageCard challenge={data.overview} />
		{#if data.overview.solved}
			<ChallengeSolvedCard challengeSolved={data.overview.solved} />
		{/if}
	</div>
</div>

<style type="scss">
	.container-small {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--space-16);
		padding: var(--space-10) 0;

		@include mq(small) {
			padding: var(--space-10);
		}

		@include mq(medium) {
			padding: var(--space-15);
		}
	}
</style>
