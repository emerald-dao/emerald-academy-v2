<script type="ts">
	import { Container, Section } from '@mateoroldos/svelte.bones';
</script>


<div class="main-wrapper">
    <Section >
        <Container>
            
                <div class="secondary-wrapper">
                <p>Join on something big</p>
                <p>50m</p>
                <p>190m</p>
                <p>5.44</p>
            </div>
            
            
        </Container>
    </Section>

</div>



<style>
    .main-wrapper{
        background-color:#37E0C2;
        padding: 0;
    }
    .secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: center;
		text-align: center;
        

	}
    p{
        color: black;
    }
</style>