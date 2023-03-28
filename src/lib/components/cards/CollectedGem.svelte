<script type="ts">
	export let achievement: Achievement;

	interface Achievement {
		title: string;
		image: string;
	}
</script>

<div class="card-primary">
	<div class="main-wrapper">
		<video height="auto" width="auto" autoplay loop muted>
			<source src={achievement.image} type="video/webm" />
		</video>
		<h5>{achievement.title}</h5>
	</div>
</div>

<style type="scss">
	.card-primary {
		height: 100%;

		.main-wrapper {
			display: flex;
			flex-direction: column;
			text-align: center;
		}
	}
</style>
