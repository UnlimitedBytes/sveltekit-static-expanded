<script type="ts">
    import { page } from '$app/stores';
    import { getTitle } from '$lib/global-functions';

    let title = `${$page.status}: ${$page.error?.message}`;
</script>

<svelte:head>
    <title>{getTitle(title)}</title>
</svelte:head>

<div class="container">
    <h1>{title}</h1>
</div>
