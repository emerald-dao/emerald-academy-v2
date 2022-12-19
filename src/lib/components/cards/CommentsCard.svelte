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
		<div class="image" />

		<div class="name">
			<p>{comment.name}</p>
			<p>{comment.username}</p>
		</div>
	</div>
	<div class="social-media">
		<p class="media">{comment.socialMedia}</p>
	</div>
</div>

<style type="scss">
	.data {
		display: flex;
		flex-direction: row;
		align-items: left;
	}
	.name {
		display: flex;
		flex-direction: column;
		margin: var(--space-3);
	}
	p {
		font-family: Inter;
		color: var(--clr-neutral-600);
	}
	.quotation-marks {
		font-size: var(--font-size-10);
		font-family: Inter;
		font-weight: var(--font-weight-bold);
	}
	.image {
		height: 50px;
		width: 50px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		margin: var(--space-3) 0 var(--space-3) 0;
	}
	.social-media {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.media {
		font-family: JetBrains Mono;
		font-weight: var(--font-normal);
	}
</style>
