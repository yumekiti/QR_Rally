<template>
    <div>
        <Header :title="'QR_Rally'" />
        <div v-if="this.user">
            <Rule :name="this.user.name" />
            <Card :num="this.user.stamp" />
            <v-btn
                elevation="2"
                fab
                absolute
                top
                right
                style="position: relative"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
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