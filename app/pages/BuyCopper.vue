<template>
    <v-page title="Buy Copper">
        <template slot="mainContent">
            <Label class="message" text="Buy Copper" col="0" row="0"/>
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
            return {
                msg: 'Hello World'
            };
        },
    }
</script>

<style scoped>
    .message {
        text-align: center;
    }
</style>
