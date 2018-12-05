<template>
    <div>
        <h1>PRIVATE HOME PAGE</h1>
    </div>
</template>

<script>
export default {
    middleware: 'authenticated',
    layout: 'private'
}
</script>
