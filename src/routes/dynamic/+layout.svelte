<script type="ts">
    import BackLink from '$lib/components/BackLink.svelte';
</script>

<div class="container">
    <BackLink />
    <slot />
</div>

<style type="scss">
    .container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
</style>
