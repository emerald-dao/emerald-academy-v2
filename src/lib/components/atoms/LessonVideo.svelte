<script type="ts">
	export let lessonVideoUrl: string;
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
</div>

<style type="scss">
	div {
		margin-bottom: var(--space-4);
	}
</style>
