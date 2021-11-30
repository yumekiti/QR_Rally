<template>
    <div class="mt-3">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <strong>{{this.title}}</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    {{this.detail}}
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Rule',
    props:{
        title: String,
        detail: String,
    }
}
</script>