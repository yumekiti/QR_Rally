<template>
    <div class="mt-3">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div id="title"></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div id="detail"></div>
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
    },
    mounted() {
        document.getElementById("title").innerHTML = this.title
        document.getElementById("detail").innerHTML = this.detail
    },
}
</script>