<script type="ts">
	import { Container, Section } from '@mateoroldos/svelte.bones';
</script>

<section>
	<div class="container">
		<div>
			<h1 class="display-small">
				Learn everything about the <span>Flow Blockchain</span>
			</h1>
			<p>
				Est nisi dolore nulla qui excepteur nostrud ea cupidatat est voluptate amet consequat duis.
				Duis laborum voluptate occaecat do reprehenderit. Proident magna non incididunt non aute
				duis cillum mollit.
			</p>
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
		}
	}
</style>
