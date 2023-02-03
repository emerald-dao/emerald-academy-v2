<script type="ts">
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div class="title-wrapper">
		<h3>Welcome!</h3>
	</div>
	<div class="message-wrapper">
		<h5>Add some special message</h5>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, enim? Ab officiis commodi
			magnam labore! Ratione provident ut at omnis ab autem et exercitationem obcaecati, libero
			dolores sed illum sequi?
		</p>
	</div>
	<StepButton active={true} />
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
