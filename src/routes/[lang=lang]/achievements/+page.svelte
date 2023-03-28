<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import DiamondsCards from '$lib/components/cards/DiamondsCards.svelte';
	import { achievements } from '$stores/AchievementsTest';
	import { ProgressBar } from '@emerald-dao/component-library';

	const greenDiamond: Achievement = {
		title: 'Green Gem',
		image: '/diamonds/Green4.webm',
		description: "You have passed all the levels related to the green gem. Now it's yours!"
	};

	const pinkDiamond: Achievement = {
		title: 'Pink Gem',
		image: '/diamonds/Pink4.webm',
		description: "You have passed all the levels related to the pink gem. Now it's yours!"
	};

	const purpleDiamond: Achievement = {
		title: 'Purple Gem',
		image: '/diamonds/Purple4.webm',
		description: "You have passed all the levels related to the purple gem. Now it's yours!"
	};

	interface Achievement {
		title: string;
		image: string;
		description: string;
	}

	/* export let data;

	const { value } = data; */

	let value = 20;
</script>

<section class="container-small main">
	<h4>{$LL.ACHIEVEMENTS_H1()}</h4>
</section>
<section class="container-small main-diamond-wrapper">
	{#if value <= 25}
		{#if value <= 5}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Green2.webm" type="video/webm" />
			</video>
		{:else if value > 5 && value <= 15}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Green3.webm" type="video/webm" />
			</video>
		{:else if value > 15 && value <= 25}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Green4.webm" type="video/webm" />
			</video>
		{/if}
		<h4 class="heading tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={0}
			max={25}
			labelText={`Green Gems - Level ${value}`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{:else if value > 25 && value <= 150}
		{#if value > 25 && value <= 50}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Pink2.webm" type="video/webm" />
			</video>
		{:else if value > 50 && value <= 100}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Pink3.webm" type="video/webm" />
			</video>
		{:else if value > 100 && value <= 150}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Pink4.webm" type="video/webm" />
			</video>
		{/if}
		<h4 class="heading tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={26}
			max={150}
			labelText={`Pink Gems - Level ${value}`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{:else if value > 150}
		{#if value > 150 && value <= 200}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Purple2.webm" type="video/webm" />
			</video>
		{:else if value > 200 && value <= 250}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Purple3.webm" type="video/webm" />
			</video>
		{:else if value > 250}
			<video height="400px" width="auto" autoplay loop muted>
				<source src="/diamonds/Purple4.webm" type="video/webm" />
			</video>
		{/if}
		<h4 class="tagline">Diamantis</h4>
		<ProgressBar
			{value}
			min={151}
			max={300}
			labelText={`Purple Gems - Level ${value}`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{/if}
</section>

<section class="container-small diamonds-wrapper">
	{#if value > 25}
		<div class="specific-card">
			<DiamondsCards achievement={greenDiamond} />
		</div>
	{/if}
	{#if value > 150}
		<div class="specific-card">
			<DiamondsCards achievement={pinkDiamond} />
		</div>
	{/if}
	{#if value > 300}
		<div class="specific-card">
			<DiamondsCards achievement={purpleDiamond} />
		</div>
	{/if}
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
		margin-bottom: 4rem;
		gap: var(--space-6);
		border: var(--clr-border-primary) var(--border-width-primary) solid;
		border-radius: var(--radius-8);
		padding: var(--space-8) 0;

		h4 {
			color: var(--clr-heading-main);
		}
	}

	.diamonds-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: var(--space-4);
	}

	.specific-card {
		width: 32%;
	}
</style>
