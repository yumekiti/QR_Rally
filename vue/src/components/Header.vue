<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>{{this.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>