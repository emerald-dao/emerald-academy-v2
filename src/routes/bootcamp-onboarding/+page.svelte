<!-- Page that dynamically renders each step -->
<script>
	
	import { generatorSteps, generatorActiveStep } from '$stores/generator/GeneratorSteps';
	import MoreAboutYou from './generator-steps/MoreAboutYou.svelte';
	
</script>

<svelte:component this={$generatorSteps[$generatorActiveStep].component} />  

<!-- <MoreAboutYou/> -->
