<template>
    <div>
        <Header :title="'QR_Rally'" />
        <Rule
            :title="this.$store.state.String.jp.rule.title"
            :detail="this.$store.state.String.jp.rule.detail"
        />
        <Card
            :title="this.$store.state.String.jp.card.title"
            :num="this.$store.state.Stamp.done"
        />
        <Fab></Fab>
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
}
</script>