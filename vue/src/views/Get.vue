<template>
    <div></div>
</template>
<script>
export default {
    name: 'Get',
    mounted() {
        this.$store.dispatch('get', {url: '/stamp/' + this.$route.params.hash})
        this.$router.push('/')
    },
}
</script>