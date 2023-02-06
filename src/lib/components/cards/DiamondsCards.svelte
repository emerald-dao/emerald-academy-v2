<script type="ts">
	export let achievement: Achievement;

	interface Achievement {
		title: string;
		image: string;
		description: string;
	}
</script>

<div class="card-primary">
	<div class="main-wrapper">
		<img src={achievement.image} alt={achievement.description} />
		<h5>{achievement.title}</h5>
		<p>{achievement.description}</p>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
