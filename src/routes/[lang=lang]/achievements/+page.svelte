<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import DiamondsCards from '$lib/components/cards/DiamondsCards.svelte';
	import { achievements } from '$stores/AchievementsTest';
	import { ProgressBar } from '@emerald-dao/component-library';
	export let data;
	const { value } = data;
	console.log(value);
</script>

<section class="container-small main">
	<h4>{$LL.ACHIEVEMENTS_H1()}</h4>
</section>
<section class="container-small main-diamond-wrapper">
	{#if value <= 10}
		<img src="/main-diamond-1.png" alt="Your diamond!" />
		<h4 class="heading tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={0}
			max={10}
			labelText={`Level 1`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{:else if value > 10 && value <= 30}
		<img src="/main-diamond-2.png" alt="Your diamond!" />
		<h4 class="heading tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={11}
			max={30}
			labelText={`Level 2`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{:else if value > 30 && value <= 60}
		<img src="/main-diamond-3.png" alt="Your diamond!" />
		<h4 class="tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={31}
			max={60}
			labelText={`Level 3`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{/if}
</section>
<section class="container-small diamonds-wrapper">
	{#each achievements as achievement}
		<div class="specific-card">
			<DiamondsCards {achievement} />
		</div>
	{/each}
</section>

<style type="scss">
	.main {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.main-diamond-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-6);
		border: var(--clr-border-primary) var(--border-width-primary) solid;
		border-radius: var(--radius-8);
		padding: var(--space-8) 0;

		img {
			height: 400px;
			width: auto;
		}

		h4 {
			color: var(--clr-heading-main);
		}
	}

	.diamonds-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
	}

	.specific-card {
		width: 32%;
	}
</style>
