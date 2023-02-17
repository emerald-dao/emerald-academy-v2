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
	<div>
		<p class="quotation-marks">“</p>
	</div>
	<div class="comment">
		<p>{comment.comment}</p>
	</div>
	<div class="data">
		<img src="/Jacob.jpeg" alt="avatar" class="image" />
		<div class="name">
			<p>{comment.name}</p>
			<p>{comment.username}</p>
		</div>
	</div>
	<div class="social-media" />
</div>

<style type="scss">
	.card-primary {
		background-color: var(--clr-background-secondary);
		.data {
			display: flex;
			flex-direction: row;
			align-items: left;

			.name {
				display: flex;
				flex-direction: column;
				margin: var(--space-3);
			}

			.image {
				height: 50px;
				width: 50px;
				background-color: var(--clr-surface-primary);
				border-radius: 50%;
				display: inline-block;
				margin: var(--space-3) 0 var(--space-3) 0;
			}
		}
		p {
			font-family: Inter;
		}
		.quotation-marks {
			font-size: var(--font-size-10);
			font-family: Inter;
			font-weight: var(--font-weight-bold);
		}

		.social-media {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
		}
	}
</style>
