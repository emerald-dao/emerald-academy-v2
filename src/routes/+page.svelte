<script type="ts">
  import dappInfo from "$lib/config/config";
  import { Section, Container, Column } from "@mateoroldos/svelte.bones";
  import { transactionInProgress } from '$stores/FlowStore'
</script>

<Section>
  {#if $transactionInProgress}
    <div>aaa</div>
  {/if}
  <Container>
    <Column>
      <h1>Welcome to <span>{dappInfo.title}</span></h1>
      <p>{dappInfo.description}</p>
      <p>Crafted by {dappInfo.author}</p>
    </Column>
  </Container>
</Section>

<style type="scss">
  h1, p {
    text-align: center;
  }

  span {
    color: var(--clr-primary-main)
  }
</style>