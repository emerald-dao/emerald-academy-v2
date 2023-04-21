<script type="ts">
	export let videoId: string;
</script>

<div>
	<iframe
		title="Lesson video"
		width="100%"
		height="315"
		src={`https://www.youtube.com/embed/${videoId}`}
		frameborder="0"
		allowfullscreen
	/>
</div>

<style type="scss">
	div {
		margin-bottom: var(--space-4);
	}
</style>
