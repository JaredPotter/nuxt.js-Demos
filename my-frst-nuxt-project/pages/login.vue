<template>
    <div>
        <h1>Login Page</h1>
        <div>
            <div>Username: <input v-model="username" type="text"></div>
            <div>Password: <input v-model="password" type="text"></div>
            <button @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            let username = this.username;
            let password = this.password;

            this.$store.dispatch('login', { username, password});
        }
    },
    computed: {
        user() {
            return this.$store.getters['user'];
        } 
    },
    watch: {
        user(user) {
            if(user) {
                this.$router.push('/private/home');
            }
        }
    }
}
</script>
