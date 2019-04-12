<template>
    <Page class="main-page">
        <ActionBar flat="true">
            <FlexboxLayout width="100%" justifyContent="space-between" alignItems="center">
                <Label width="50" text="☰" @tap="$refs.drawer.nativeView.showDrawer()"/>
                <Label :text="title"></Label>
                <Label width="50" text="⧕⧔"></Label>
            </FlexboxLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <FlexboxLayout class="drawer-header" flexDirection="column">
                    <Label class="user-avatar" text="JS" alignSelf="flex-start"></Label>
                    <Label class="user-welcome" text="Welcome"></Label>
                    <Label class="user-name" text="John Smith"></Label>
                    <Label class="user-email" text="johnsmith@example.com"></Label>
                </FlexboxLayout>

                <Label v-for="page in menu" class="drawer-item" :text="page.name" @tap="goTo(page.route)"/>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <slot name="mainContent"/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
    export default {
        props: {
            title: {
                type: String,
                default: 'Title',
            }
        },
        data() {
            return {
                menu: [
                    {name: 'Vault', route: {to: 'vault', params: null}},
                    {name: 'Buy Copper', route: {to: 'buy', params: null}},
                    {name: 'Sell Copper', route: {to: 'sell', params: null}},
                    {name: 'Logout', route: {to: 'login', params: null}},
                ]
            }
        },
        methods: {
            goTo(route) {
                console.log('goto ->', route.to, route.params);
               this.$router.to(route.to, route.params);
            },
        }
    }
</script>

<style scoped>
    ActionBar {
        background: #944B0C;
        color: azure;
    }

    .main-page {
        background: #F2F2F2;
    }

    .drawer-header {
        background: linear-gradient(to top, #944B0C, #944B0C);
        padding: 15;
    }

    .user-welcome {
        color: azure;
        font-size: 14;
        padding: 0 0 25 0;
    }

    .user-name {
        color: azure;
        font-size: 24;
    }

    .user-email {
        color: azure;
        font-size: 16;
    }

    .user-avatar {
        height: 50;
        width: 50;
        border-radius: 50;
        background: azure;
        color: orange;
        text-align: center;
        margin-bottom: 25;
    }

    .drawer-item {
        padding: 30 0 0 15;
        color: #333333;
        font-size: 16;
    }
</style>
