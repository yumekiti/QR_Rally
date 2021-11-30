<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title @click="this.indexLink">{{this.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="this.indexLink">
                <v-icon>mdi-card-bulleted</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
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
        signinLink(){
            if(this.$route.path != '/signin'){
                this.$router.push('/signin')
            }
        }
    }
}
</script>