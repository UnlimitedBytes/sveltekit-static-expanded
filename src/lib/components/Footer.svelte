<script lang="ts">
    const year = new Date().getFullYear();
</script>

<footer>
    <span>
        Copyright {year} &copy;
        <a rel="external" href="https://unlimitedbytes.ovh">Unlimitedbytes</a>
    </span>
</footer>

<style lang="scss">
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #fff;
        -webkit-box-shadow: 0px -4px 7px 0px rgba(0, 0, 0, 0.6);
        box-shadow: 0px -4px 7px 0px rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
    }

    :global(body[data-theme='dark']) {
        footer {
            background: #21252b;
        }
    }
</style>
