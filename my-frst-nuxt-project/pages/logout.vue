<template>
    <div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('logout');
    },
    computed: {
        user() {
            return this.$store.getters['user'];
        } 
    },
    watch: {
        user(user) {
            if(!user) {
                this.$router.push('/login');
            }
        }
    }
}
</script>
