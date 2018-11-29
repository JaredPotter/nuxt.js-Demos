<template>
    <div>
        <h1>Browser Only Component - Current URL: {{ currentURL }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentURL: ''
        };
    },
    created() {
        let url = document.URL;

        this.url = url;
    },
    // mounted() {
    //     let url = document.URL;

    //     this.url = url;
    // },
}
</script>
