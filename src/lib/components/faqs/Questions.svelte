<script type="ts">
	export let questionAnswer: any;
</script>

<div class="questions">
	<h5 class="heading">{questionAnswer.question}</h5>
</div>

<style type="scss">
	.questions {
		cursor: pointer;
		padding: var(--space-7);

		h5 {
			margin: 0;
			font-size: var(--font-size-3);
		}
	}
</style>
