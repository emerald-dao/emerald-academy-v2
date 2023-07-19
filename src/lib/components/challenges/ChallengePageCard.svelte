<script type="ts">
	import { page } from '$app/stores';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs, Button, Label } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import ChallengeContent from './ChallengeContent.svelte';

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
	<ChallengeContent {challenge} card={false} />
	<div class="button-wrapper">
		<Button size={'large'} href={`${challenge.link}`} target={'_blank'}>
			Go to playground
			<Icon icon="tabler:arrow-right" style="color: var(--clr-heading-inverse);" />
		</Button>
	</div>
</div>

<style type="scss">
	.card-primary {
		display: flex;
		flex-direction: column;
		width: 100%;

		.routes-wrapper {
			padding: var(--space-5) var(--space-5) var(--space-3) var(--space-5);
		}

		.button-wrapper {
			padding: var(--space-3) var(--space-5) var(--space-5) var(--space-5);
		}
	}
</style>
