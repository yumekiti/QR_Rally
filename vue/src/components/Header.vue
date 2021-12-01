<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title @click="this.indexLink">{{this.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="this.language">
                <v-icon>mdi-translate</v-icon>
            </v-btn>
            <v-btn icon @click="this.indexLink">
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
        title: String
    },
    methods:{
        indexLink(){
            if(this.$route.path != '/'){
                this.$router.push('/')
            }
        },
        language(){
            Cookies.set('en', Number(Boolean(!Number(this.$store.state.String.enStatus))))
            this.$store.state.String.enStatus = Cookies.get('en')
            this.$router.go({path: this.$router.currentRoute.path, force: true})
        }
    }
}
</script>