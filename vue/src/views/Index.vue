<template>
    <div>
        <Header :title="'QR_Rally'" />
        <Rule />
        {{this.user}}
        <Card :num="0" />
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
    computed: {
        user() {
            return this.$store.state.data.user;
        },
    },
    mounted(){
        this.$store.state.data.user = null
        this.$store.dispatch('get', {url: 'user'});
    },
    watch: {
        user(){
            this.$nextTick(() => {
                return this.user
            })
        }
    }
}
</script>