<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title @click="this.indexLink">{{this.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-show="lang" class="text-center">
                <v-menu offset-y>
                    <template #activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-translate</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in this.$store.state.Language"
                            :key="index"
                            link
                            @click="language(item.value)"
                        >
                            <v-list-item-title>
                                {{ item.lang }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <v-btn v-show="card" icon @click="this.indexLink">
                <v-icon>mdi-card-bulleted</v-icon>
            </v-btn>
        </v-app-bar>
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