<template>
    <v-page title="Vault">
        <template slot="mainContent">
            <Label class="message" :text="msg" col="0" row="0"/>
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
                msg: 'My Vault'
            };
        },
    }
</script>

<style scoped>
    .message {
        text-align: center;
    }
</style>
