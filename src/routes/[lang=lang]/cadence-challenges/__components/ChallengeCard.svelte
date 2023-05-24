<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { Label } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let challenge: ChallengeWithSlug;

	interface ChallengeWithSlug extends CadenceChallenge {
		slug: string;
	}
</script>

<a href={`/${$locale}/${challenge.slug}`} class="card-primary">
	<img src={`${challenge.image}`} alt="" />
	<div class="labels-wrapper">
		<ContentLabel type={challenge.contentType} color="primary">Challenge</ContentLabel>
		<div class="prize-wrapper">
			{#if challenge.solved}
				<Icon icon="fluent-mdl2:completed-solid" color="var(--clr-primary-main)" />
				Completed
			{:else if challenge.prize > 0}
				<Icon icon="mdi:selection-ellipse" color="var(--clr-primary-main)" />
				{challenge.prize} $FLOW
			{:else}
				<Icon icon="mdi:selection-ellipse" color="var(--clr-primary-main)" />
				Free
			{/if}
		</div>
	</div>
	<div class="text-wrapper">
		<h5>{challenge.title}</h5>
		<p>{challenge.description}</p>
	</div>
	<div class="skills">
		<p>Skills to test</p>
		<div class="skills-wrapper">
			{#each challenge.subjects as subject}
				<Label size="x-small" color="neutral" hasBorder={true}>{subject}</Label>
			{/each}
		</div>
	</div>
</a>

<style type="scss">
	.card-primary {
		padding: 0;
		text-decoration: none;

		img {
			height: 200px;
			width: -webkit-fill-available;
			object-fit: cover;
			object-position: center 30%;
		}

		.labels-wrapper {
			padding: var(--space-5);
			display: flex;
			justify-content: space-between;

			.prize-wrapper {
				display: flex;
				align-items: center;
				gap: 2px;
			}
		}

		.text-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);
			display: flex;
			flex-direction: column;
			gap: var(--space-5);

			h5 {
				margin: 0;
			}

			p {
				text-decoration: none;
				color: var(--clr-text-main);
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
	}
</style>
