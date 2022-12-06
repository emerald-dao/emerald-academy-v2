<script type="ts">
	import { Container, Section } from '@mateoroldos/svelte.bones';
</script>

<section>
	<div class="container">
		<div>
			<h1 class="display-small">
				Learn everything about the <span>Flow Blockchain</span>
			</h1>
		</div>
		<div>
			<div>video</div>
			<video src="https://www.youtube.com/watch?v=HJLS09gIurk">
				<track kind="captions" />
			</video>
		</div>
	</div>
</section>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
		justify-content: center;
		text-align: center;
		padding: var(--space-6);

		span {
			color: var(--clr-primary-main);
			font-weight: var(--font-weight-bold);
		}
	}
</style>
