<script>
	import { Section, Container, Card } from '@mateoroldos/svelte.bones';
</script>

<Section>
    <Container>
        <div class="secondary-wrapper">
            <h4>Join DAO</h4>
            <p>We are the first DAO on flow blockchain</p>
            <p>Educate, build and govern</p>
            <div class="secondary-wrapper ">
                <button>Join Emerald City</button>
            </div>
            
        </div>
    </Container>
</Section>

<style>
    .secondary-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		justify-content: center;
		text-align: center;

	}
    button{
        margin: auto;
    }
    /* button {
        text-align: center;
    } */
</style>