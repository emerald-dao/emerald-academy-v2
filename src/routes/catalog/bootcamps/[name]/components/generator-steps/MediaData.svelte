<script type="ts">
	import { InputWrapper } from '@emerald-dao/component-library';
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div>
		<h3>One more thing to do</h3>
	</div>
	<div class="form-wrapper">
		<form action="">
			<label for="discord-handle">What's your Discord handle?</label>
			<input name="discord-handle" type="text" placeholder="tsnakjake#233" />

			<label for="blocto-adress">What's your Blotco adress?</label>
			<input name="blocto-adress" type="email" placeholder="0x99bd48c8035kdjeu504" />
		</form>
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
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
