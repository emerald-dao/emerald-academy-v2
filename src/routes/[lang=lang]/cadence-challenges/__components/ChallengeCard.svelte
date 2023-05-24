<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import FlowPrize from '$lib/components/atoms/FlowPrize.svelte';
	import ContentLabel from '$lib/components/label/ContentLabel.svelte';
	import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
	import { Label } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import ChallengeContent from './ChallengeContent.svelte';

	export let challenge: ChallengeWithSlug;

	interface ChallengeWithSlug extends CadenceChallenge {
		slug: string;
	}
</script>

<a href={`/${$locale}/${challenge.slug}`} class="card-primary">
	<img src={`${challenge.image}`} alt="challenge" />
	<ChallengeContent {challenge} />
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
			border-top-left-radius: var(--radius-4);
			border-top-right-radius: var(--radius-4);
		}
	}
</style>
