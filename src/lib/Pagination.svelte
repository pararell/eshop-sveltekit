<script>
    import { createEventDispatcher } from 'svelte';
    export let page;
    const dispatch = createEventDispatcher();

    const prev = (e) => {
        e.preventDefault();
        dispatch('prev');
    }

    const next = (e) => {
        e.preventDefault();
        dispatch('next');
    }
</script>

{#if page}
<nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true" on:click={prev}>Previous</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a href="#" class="page-link">{page}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" on:click={next}>Next</a>
      </li>
    </ul>
  </nav>
{/if}
