<template>
    <div></div>
</template>
<script>
export default {
    name: 'Get',
    mounted() {
        new Promise((resolve) => {
            resolve(this.$store.commit('getStamp', this.$route.params.hash))
        }).then(() => {
            this.$router.push('/')
        })
    },
}
</script>