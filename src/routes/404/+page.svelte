<script lang="ts">
    import { PUBLIC_APP_NAME } from '$env/static/public';
    import { getTitle } from '$lib/global-functions';
</script>

<svelte:head>
    <title>{getTitle('Not Found')}</title>
    <meta name="description" content="Couldn't find that page on {PUBLIC_APP_NAME}" />
</svelte:head>

<div class="container">
    <h1>404: Not Found.</h1>
</div>
