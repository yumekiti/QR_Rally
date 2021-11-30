<template>
    <div>
        <p>
            {{this.$store.state.String}}
        </p>
        <p>
            {{this.$store.state.Hash}}
        </p>
        <v-btn @click="this.hoge">
            test
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'Test',
    methods: {
        hoge(){
            this.$store.commit('getStamp', 'hash')
        }
    }
}
</script>