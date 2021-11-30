<template>
    <div>
    </div>
</template>
<script>
export default {
    name: 'Signout',
    mounted(){
        this.$store.state.data.user = null
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'user'}))
        }).then(() => {
            this.$router.push('/signin')
        })
    },
}
</script>