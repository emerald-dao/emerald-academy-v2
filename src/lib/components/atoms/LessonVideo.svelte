<script type="ts">
	export let lessonVideoUrl: string;
	export let lessonVideoDescription: string = "";
</script>

<div>
	<iframe
		title="Lesson video"
		width="100%"
		height="315"
		src={lessonVideoUrl}
		frameborder="0"
		allowfullscreen
	/>
	{#if lessonVideoDescription}
		<span>{lessonVideoDescription}</span>
	{/if}
</div>

<style type="scss">
	div {
		margin-bottom: var(--space-4);
		text-align: center;

		span {
			font-size: var(--font-size-0);
		}
	}
</style>
