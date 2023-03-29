<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import CollectedGem from '$lib/components/cards/CollectedGem.svelte';
	import UnknownGem from '$lib/components/cards/UnknownGem.svelte';
	import { ProgressBar } from '@emerald-dao/component-library';

	const greenDiamond: Achievement = {
		title: 'Green Gem',
		image: '/diamonds/Green4.webm'
	};

	const pinkDiamond: Achievement = {
		title: 'Pink Gem',
		image: '/diamonds/Pink4.webm'
	};

	const purpleDiamond: Achievement = {
		title: 'Purple Gem',
		image: '/diamonds/Purple4.webm'
	};

	interface Achievement {
		title: string;
		image: string;
	}

	export let data;

	const { value } = data;
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
		<h4 class="heading tagline">Green Gem</h4>
		<ProgressBar
			{value}
			min={0}
			max={25}
			labelText={`Level ${value}`}
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
		<h4 class="heading tagline">Pink Gem</h4>
		<ProgressBar
			{value}
			min={26}
			max={150}
			labelText={`Level ${value}`}
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
		<h4 class="tagline">Purple Gem</h4>
		<ProgressBar
			{value}
			min={151}
			max={300}
			labelText={`Level ${value}`}
			width="inherit"
			showPercentage={true}
			size="large"
		/>
	{/if}
</section>

<section class="container-small gems-collection">
	<div class="gems-collection-title-wrapper">
		<h4>Collected gems</h4>
	</div>

	<div class="diamonds-wrapper">
		{#if value <= 25}
			<div class="specific-card">
				<UnknownGem />
			</div>
			<div class="specific-card">
				<UnknownGem />
			</div>
			<div class="specific-card">
				<UnknownGem />
			</div>
		{:else if value > 25 && value <= 150}
			<div class="specific-card">
				<CollectedGem achievement={greenDiamond} />
			</div>
			<div class="specific-card">
				<UnknownGem />
			</div>
			<div class="specific-card">
				<UnknownGem />
			</div>
		{:else if value > 150 && value < 300}
			<div class="specific-card">
				<CollectedGem achievement={greenDiamond} />
			</div>
			<div class="specific-card">
				<CollectedGem achievement={pinkDiamond} />
			</div>
			<div class="specific-card">
				<UnknownGem />
			</div>
		{:else if value >= 300}
			<div class="specific-card">
				<CollectedGem achievement={greenDiamond} />
			</div>
			<div class="specific-card">
				<CollectedGem achievement={pinkDiamond} />
			</div>
			<div class="specific-card">
				<CollectedGem achievement={purpleDiamond} />
			</div>
		{/if}
	</div>
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

		h4 {
			color: var(--clr-heading-main);
		}
	}
	.gems-collection {
		.gems-collection-title-wrapper {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: var(--space-14);
		}

		.diamonds-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--space-4);

			@include mq(small) {
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-around;
			}
		}

		.specific-card {
			@include mq(medium) {
				width: 32%;
			}
		}
	}
</style>
