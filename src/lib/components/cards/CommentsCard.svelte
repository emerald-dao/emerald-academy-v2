<script type="ts">
	export let comment: Comment;

	interface Comment {
		comment: string;
		img: string;
		username: string;
		name: string;
		socialMedia: string;
	}
</script>

<div class="card-primary">
	<div class="comment-wrapper">
		<p class="quotation-marks">“</p>

		<p>{comment.comment}</p>
	</div>
	<div class="data">
		<img src={comment.img} alt="avatar" class="image" />
		<div class="name">
			<p class="strong">{comment.name}</p>
			<p class="soft">{comment.username}</p>
		</div>
	</div>
</div>

<style type="scss">
	.card-primary {
		background-color: var(--clr-background-secondary);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		gap: var(--space-4);
		border: none;

		.data {
			display: flex;
			flex-direction: row;
			align-items: center;

			.name {
				display: flex;
				flex-direction: column;
				margin-left: var(--space-3);

				.strong {
					color: var(--clr-heading-main);
				}

				.soft {
					color: var(--clr-text-off);
				}
			}

			.image {
				height: 50px;
				width: 50px;
				background-color: var(--clr-surface-primary);
				border-radius: 50%;
			}
		}

		.comment-wrapper {
			position: relative;

			.quotation-marks {
				position: absolute;
				left: -12px;
				top: 10px;
				font-size: var(--font-size-11);
				color: var(--clr-text-off);
				opacity: 0.2;
			}
		}
	}
</style>
