<template>
    <div>
        {{this.user}}
    </div>
</template>
<script>
export default {
    name: 'Admin',
    data: () => {
        return {
            user: null
        }
    },
    methods: {
        userGet() {
            this.user = this.$store.state.data.user;
        },
    },
    mounted(){
        this.$store.state.data.user = null
        new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'user'}))
        }).then(() => {
            this.userGet()
        })
    },
}
</script>