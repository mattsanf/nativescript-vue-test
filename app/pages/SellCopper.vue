<template>
    <v-page title="Sell Copper">
        <template slot="mainContent">
            <Label class="message" text="Sell Copper" col="0" row="0"/>
        </template>
    </v-page>
</template>

<script >
    import vPage from '~/components/vPage';

    export default {
        components: {
            vPage
        },
        data() {
        },
    }
</script>

<style scoped>
    .message {
        text-align: center;
    }
</style>
