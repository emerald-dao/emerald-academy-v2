<script type="ts">
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div class="title-wrapper">
		<h3>You're signed up!</h3>
	</div>
	<div class="message-wrapper">
		<p>
			All updates from here on will be in the announcements channel of the Emerald City Discord.
		</p>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		.title-wrapper {
			margin-bottom: 3rem;
		}

		.message-wrapper {
			max-width: 600px;
			border: 1px solid var(--clr-border-primary);
			border-radius: var(--radius-2);
			margin-bottom: 1rem;
			padding: 1rem;
		}
	}
</style>
