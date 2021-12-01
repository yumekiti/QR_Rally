<template>
    <div>
        <Header :title="'QR_Rally'" />
        <Rule
            :title="this.language.rule.title"
            :detail="this.language.rule.detail"
        />
        <Card
            :title="this.language.card.title"
            :num="Number(this.$store.state.Stamp.done)"
        />
        <Fab></Fab>
        <Footer
            :title="this.language.footer.title"
        />
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
    data: () =>{
        return {
            language: {
                rule: {
                    title: '',
                    detail: '',
                },
                card: {
                    title: '',
                },
                footer: {
                    title: '',
                },
            },
        }
    },
    mounted() {
        Number(this.$store.state.String.enStatus) ? this.language = this.$store.state.String.en : this.language = this.$store.state.String.jp
    },
}
</script>