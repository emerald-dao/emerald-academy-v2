<script>
    import { generatorActiveStep } from "$stores/generator/GeneratorSteps";
    import { Button } from "@emerald-dao/component-library";
</script>

<div class="step-buttons">
    
    <div>
        <Button on:click={generatorActiveStep.decrement}>Backwards</Button>
    </div>
    <div>
        <Button on:click={generatorActiveStep.increment}>Forward</Button>
    </div>

</div>


<style type="scss">
	.step-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2rem;
		gap: 2rem;
	}
</style>

