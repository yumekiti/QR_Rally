<template>
    <div>
        <Header :title="'QR_Rally'" />
        <Rule />
        <Card v-if="this.data" :num="this.data.stamp" />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Rule from '@/components/Rule.vue'

export default {
    name: 'Index',
    components: {
        Header,
        Card,
        Footer,
        Rule,
    },
    data: () => {
        return {
            data: null
        }
    },
    methods: {
        user() {
            this.data = this.$store.state.data.user;
        },
    },
    mounted(){
        this.$store.state.data.user = null
        let promise = new Promise((resolve) => {
            resolve(this.$store.dispatch('get', {url: 'user'}))
        })
        promise.then(() => {
            this.user()
        })
    },
}
</script>