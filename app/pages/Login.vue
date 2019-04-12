<template>
    <Page>
        <FlexboxLayout class="gradient-bg" alignItems="center" justifyContent="center" flexDirection="column">
            <Label class="title" text="Welcome"/>
            <Label class="sub-title" text="Please log in to your account"/>
            <FlexboxLayout class="login-box" alignItems="center" justifyContent="center" flexDirection="column">
                <TextField class="input" v-model="username" hint="Username" />
                <TextField class="input" v-model="password" hint="Password" secure="true"/>
                <Button class="button" text="LOG IN" @tap="login"/>
                <Label class="error-msg" text="Username or Password incorrect" v-if="error"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                error: false,
                username: null,
                password: null,
            }
        },
        methods: {
            login() {
                this.error = false;
                if ((this.username && this.password) || true) {
                    this.toHome();
                } else {
                    this.error = true;
                }
            },
            toHome() {
                this.$router.to('vault');
            }
        }
    };
</script>

<style scoped>
    .gradient-bg {
        background: linear-gradient(to top, #EA871E, #7E3A06);
    }

    .title {
        color: azure;
        font-size: 36;
        font-weight: bold;
    }

    .sub-title {
        color: azure;
        font-size: 14;
    }

    .login-box {
        width: 90%;
        background-color: azure;
        padding: 40 20;
        margin: 20 0;
        border-radius: 2;
    }

    .input {
        width: 80%;
        border-bottom-width: 1;
        border-color: dimgray;
        placeholder-color: dimgray;
        padding: 5 0;
        font-size: 16;
        margin: 10 0;
    }

    .button {
        width: 80%;
        padding: 10;
        margin-top: 20;
        background: #1F81E9;
        border-radius: 50px;
        color: azure;
    }

    .error-msg {
        color: orangered;
        font-size: 14;
        margin-top: 10;
    }
</style>
