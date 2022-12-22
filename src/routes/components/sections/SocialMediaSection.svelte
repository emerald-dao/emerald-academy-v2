<script type="ts">
	import { comments } from '$lib/config/comments';
	import CommentsCard from '$lib/components/cards/CommentsCard.svelte';
</script>

<div class="circle-wrapper">
	<div class="circle" />
</div>
<section class="content-section">
	<div class="container">
		<h4>Moree than 1000 students <br /> recommended us</h4>

		<div class="comments-container">
			{#each comments as c, i}
				<div class="comment-{i}">
					<CommentsCard comment={c} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	.circle-wrapper {
		position: relative;
	}
	.content-section {
		overflow: hidden;
	}
	.comments-container {
		display: grid;
		grid-auto-flow: column dense; /* column flow with "dense" to fill all the cells */
		grid-template-rows: 1fr 1fr; /* 2 rows */
		gap: var(--space-3);
		width: 350px;
	}
	[class^='comment-']:nth-child(even) {
		animation: moving 10s infinite;
		animation-timing-function: linear;
		width: 350px;
	}
	[class^='comment-']:nth-child(odd) {
		animation: moving2 10s infinite;
		animation-timing-function: linear;
	}

	@keyframes moving {
		0% {
			transform: translate(0);
		}
		100% {
			transform: translate(-100%);
		}
	}
	@keyframes moving2 {
		0% {
			transform: translate(0);
		}
		100% {
			transform: translate(100%);
		}
	}
	h4 {
		text-align: center;
		// margin: 200px;
		--font-weight: var(--font-weight-semibold);
		margin-bottom: var(--space-12);
	}
	.circle {
		height: 350px;
		width: 350px;
		background-color: #23e6c0;
		border-radius: 50%;
		position: absolute;
		top: -115px;
		left: 38%;
		filter: blur(100px);
		opacity: 0.2;
		z-index: -1;
	}
	// .container {
	// 	position: relative;
	// }
</style>
