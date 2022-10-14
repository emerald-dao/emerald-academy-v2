<script>
    import { Section, Container, Card } from '@mateoroldos/svelte.bones';
</script>

<Section>
    <Container>
        <div class="columns">
            <div>
                <h4>aca va el menu</h4>
            </div>
            <div>
                <h3>Aca va el catalog</h3>
    
            </div>

        </div>
        
    </Container>
</Section>

<style type="scss">
	@use '../../../../lib/styles/utils' as *;

	.columns {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 3rem;
        
	}

    

</style>