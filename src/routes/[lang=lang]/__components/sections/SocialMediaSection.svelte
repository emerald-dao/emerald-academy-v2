<script type="ts">
	import { multiplyArray } from '$lib/utilities/dataTransformation/multiplyArray';
	import { LL } from '$i18n/i18n-svelte';
	import { comments } from '$lib/config/comments';
	import CommentsCard from '$lib/components/cards/CommentsCard.svelte';
</script>

<div class="circle-blur">
	<div class="circle" />
</div>
<section>
	<h4>{$LL.SOCIAL_H1()}</h4>
	<div class="comments-wrapper">
		{#each multiplyArray(comments, 30) as c, i}
			<div class="comment-{i}">
				<CommentsCard comment={c} />
			</div>
		{/each}
	</div>
</section>

<style type="scss">
	section {
		overflow: hidden;
		width: 100vw;

		h4 {
			text-align: center;
			--font-weight: var(--font-weight-medium);
			margin-bottom: var(--space-12);
		}

		.comments-wrapper {
			display: grid;
			grid-auto-flow: column dense; /* column flow with "dense" to fill all the cells */
			grid-template-rows: 1fr 1fr; /* 2 rows */
			gap: var(--space-7);
			justify-content: center;

			[class^='comment-']:nth-child(even) {
				animation: moving 1000s infinite;
				animation-timing-function: linear;
				width: 350px;
			}

			[class^='comment-']:nth-child(odd) {
				animation: moving2 1000s infinite;
				animation-timing-function: linear;
			}

			@keyframes moving {
				0% {
					transform: translate(0);
				}
				100% {
					transform: translate(10000%);
				}
			}

			@keyframes moving2 {
				0% {
					transform: translate(0);
				}
				100% {
					transform: translate(-10000%);
				}
			}
		}
	}

	.circle-blur {
		position: relative;

		.circle {
			height: 350px;
			width: 350px;
			background-color: var(--clr-primary-main);
			border-radius: 50%;
			position: absolute;
			top: -115px;
			left: 38%;
			filter: blur(100px);
			opacity: 0.2;
			z-index: -1;
		}
	}
</style>
