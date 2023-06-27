<script lang="ts">
    import { PUBLIC_APP_NAME } from '$env/static/public';
    import { getTitle } from '$lib/global-functions';
</script>

<svelte:head>
    <title>{getTitle('Dynamic')}</title>
    <meta name="description" content="Dynamic pages of {PUBLIC_APP_NAME}" />
</svelte:head>

<div class="container">
    <h1>Dynamic Content</h1>
    <p><a href="/dynamic/server">Dynamic (Server Generated)</a></p>
    <p><a href="/dynamic/server-client">Dynamic (Server & Client generated)</a></p>
    <p><a href="/dynamic/client">Dynamic (Client generated)</a></p>
</div>
