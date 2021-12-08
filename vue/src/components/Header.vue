<template>
    <div class="header">
        <h1
            @click="this.indexLink"
        >
            QR-rally
        </h1>
        <v-spacer></v-spacer>
        <v-col cols="6" sm="4">
            <v-select
                :items="this.$store.state.Language"
                item-text="lang"
                item-value="value"
                label="Language"
                prepend-icon="mdi-translate"
                single-line
                @change="language($event)"
                style="font-size: 16px !important "
            ></v-select>
        </v-col>
    </div>
</template>
<script>
import Cookies from 'js-cookie';

export default {
    name: 'Header',
    props: {
        title: String,
        card: Boolean,
        lang: Boolean,
    },
    methods:{
        indexLink(){
            if(this.$route.path != '/'){
                this.$router.push('/')
            }
        },
        language(value){
            Cookies.set('language', value)
            this.$i18n.locale = value;
        }
    },
    mounted() {
        this.$i18n.locale = Cookies.get('language')
    },
}
</script>
<style scoped>
div {
    font-size: 62.5%;
}

/* header部分 */
.header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    width: 100%;
    height: 58px;
    box-shadow: 0px 4px 20px rgba(205, 205, 205, 0.5);
    background: #fff;
}
</style>