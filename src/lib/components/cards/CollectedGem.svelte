<script type="ts">
	export let achievement: Achievement;

	interface Achievement {
		title: string;
		image: string;
	}
</script>

<div class="card-primary">
	<div class="main-wrapper">
		<video height="190px" width="190px" autoplay loop muted>
			<source src={achievement.image} type="video/webm" />
		</video>
		<h5 class="tagline-small">{achievement.title}</h5>
	</div>
</div>

<style type="scss">
	.card-primary {
		height: 100%;

		.main-wrapper {
			display: flex;
			flex-direction: column;
			text-align: center;

			h5 {
				color: var(--clr-heading-main);
			}
		}
	}
</style>
