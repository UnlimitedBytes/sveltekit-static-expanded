<script lang="ts">
    import { getTitle } from '$lib/global-functions';
</script>

<svelte:head>
    <title>{getTitle('Not Found')}</title>
</svelte:head>

<div class="container">
    <h1>404: Not Found.</h1>
</div>
