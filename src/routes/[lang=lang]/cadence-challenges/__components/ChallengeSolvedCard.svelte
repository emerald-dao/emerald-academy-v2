<script type="ts">
	import Author from '$lib/components/atoms/Author.svelte';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let challengeSolved: CadenceChallenge['solved'];
</script>

<div class="card-primary">
	<div class="author-wrapper">
		{#if challengeSolved}
			<Author
				name={challengeSolved.author.name}
				avatarUrl={challengeSolved.author.avatarUrl}
				socialMediaUrl={challengeSolved.author.socialMediaUrl}
				isVerified={challengeSolved.author.isVerified}
				challengeAuthor={true}
			/>
		{/if}
	</div>
	<div class="text-wrapper">
		<p>{challengeSolved?.answerDescription}</p>
	</div>
	<div class="button-wrapper">
		<Button
			size={'large'}
			href={`${challengeSolved?.answerLink}`}
			target={'_blank'}
			type={'ghost'}
			color={'neutral'}
		>
			See answer
			<Icon icon="tabler:arrow-right" style="color: var(--clr-heading-main);" />
		</Button>
	</div>
</div>

<style type="scss">
	.card-primary {
		display: flex;
		flex-direction: column;
		width: 100%;

		.author-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);
			display: flex;
			gap: var(--space-8);
		}

		.text-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);
			display: flex;
			flex-direction: column;
			gap: var(--space-5);
		}

		.button-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-5) var(--space-5);
		}
	}
</style>
