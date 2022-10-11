<script type="ts">
	import { Container, Section } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<div class="main-wrapper">
			<div>
				<h1>Learn everything</h1>
				<p>
					Est nisi dolore nulla qui excepteur nostrud ea cupidatat est voluptate amet consequat
					duis. Duis laborum voluptate occaecat do reprehenderit. Proident magna non incididunt non
					aute duis cillum mollit.
				</p>
			</div>
			<div>
				<div>video</div>
				<video src="https://www.youtube.com/watch?v=HJLS09gIurk">
					<track kind="captions" />
				</video>
			</div>
		</div>
	</Container>
</Section>

<style type="scss">
	@use '../../../../lib/styles/utils' as *;

	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
