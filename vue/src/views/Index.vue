<template>
    <div>
        <Header :title="'QR_Rally'" />
        <div v-if="this.user">
            <Rule :name="this.user.name" />
            <Card :num="this.user.stamp" />
            <Fab></Fab>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Rule from '@/components/Rule.vue'
import Fab from '@/components/Fab.vue'

export default {
    name: 'Index',
    components: {
        Header,
        Card,
        Footer,
        Rule,
        Fab,
    },
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