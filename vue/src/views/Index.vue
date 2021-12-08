<template>
    <div>
        <Header
            :title="'QR_Rally'"
            :card="false"
            :lang="true"
        />
        <Rule
            :title="$t('rule.title')"
            :detail="$t('rule.detail')"
        />
        <Card
            :title="$t('card.title')"
            :num="Number(this.$store.state.Stamp.done)"
            style="margin-bottom: 120px;"
        />
        <Footer
            :title="$t('footer.title')"
        />
        <Fab></Fab>
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