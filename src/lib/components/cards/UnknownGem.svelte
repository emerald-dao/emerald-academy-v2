<div class="card-primary">
	<div class="main-wrapper">
		<div class="question-mark-wrapper card">
			<p>?</p>
		</div>
		<h5 class="tagline-small">Unknown Gem</h5>
	</div>
</div>

<style type="scss">
	.card-primary {
		height: 100%;
		opacity: 0.6;
		border: dotted var(--clr-border-primary) 2px;

		.main-wrapper {
			display: flex;
			flex-direction: column;
			text-align: center;

			.question-mark-wrapper {
				padding: 84px;
				background: var(--clr-neutral-800);

				p {
					font-size: var(--font-size-8);
				}
			}

			h5 {
				color: var(--clr-heading-main);
			}
		}
	}
</style>
