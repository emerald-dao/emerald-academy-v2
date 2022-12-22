<script type="ts">
	import AchievementsCard from '$lib/components/cards/AchievementsCard.svelte';
	import { achievements } from '$stores/AchievementsTest';
</script>

<section>
	<div class="container ">
		<div class="main">
			<h4>Your Achievements</h4>
			<div>
				<p>main achievement</p>
			</div>
		</div>
		<div class="secondary-wrapper">
			{#each achievements as achievement}
				<div class="specific-card">
					<AchievementsCard {achievement} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.main {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.secondary-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
	}
	.specific-card {
		width: 32%;
	}
</style>
