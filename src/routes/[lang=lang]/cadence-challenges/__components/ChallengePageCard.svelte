<script type="ts">
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs, Button, Label } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let challenge: CadenceChallenge;

	let routes = [
		{
			path: `/${$page.params.lang}/cadence-challenges`,
			label: 'Cadence Challenges'
		},
		{
			path: `/${$page.params.lang}/cadence-challenges/${$page.params.name}`,
			label: transformUrlToHeading($page.params.name)
		}
	];
</script>

<div class="card-primary">
	<div class="routes-wrapper">
		<Breadcrumbs {routes} />
	</div>
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
	<div class="button-wrapper">
		<Button size={'large'} href={`${challenge.link}`} target={'_blank'}>
			Go to Playground
			<Icon icon="tabler:arrow-right" style="color: var(--clr-heading-inverse);" />
		</Button>
	</div>
</div>

<style type="scss">
	.card-primary {
		.routes-wrapper {
			padding: var(--space-5) var(--space-5) var(--space-3) var(--space-5);
		}

		.labels-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);

			display: flex;
			gap: var(--space-8);

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
		}
		.skills {
			padding: var(--space-3) var(--space-5) var(--space-3) var(--space-5);

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

		.button-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-5) var(--space-5);
		}
	}
</style>
