<script type="ts">
	import { comments } from '$lib/config/comments';
	import CommentsCard from '$lib/components/cards/CommentsCard.svelte';
	console.log(comments);
</script>

<section>
	<div class="container">
		<h4>Moree than 1000 students <br /> recommended us</h4>
		<div class="content">
			{#each comments as c}
				<class class="comments">
					<CommentsCard comment={c} />
				</class>
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	.content {
		display: grid;
		grid-auto-flow: column dense; /* column flow with "dense" to fill all the cells */
		grid-template-rows: 1fr 1fr; /* 2 rows */
		gap: var(--space-2);
	}

	h4 {
		text-align: center;
		// margin: 200px;
		--font-weight: var(--font-weight-semibold);
		margin-bottom: var(--space-12);
	}
</style>
