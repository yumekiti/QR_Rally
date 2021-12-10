<template>
    <div></div>
</template>
<script>
export default {
    name: 'Get',
    mounted() {
        new Promise((resolve) => {
            resolve(this.$store.commit('Stamp/getStamp', {hash: this.$route.params.hash, ga: this.$ga}))
        }).then(() => {
            this.$router.push('/')
        })
    },
}
</script>