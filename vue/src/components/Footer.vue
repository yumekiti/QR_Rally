<template>
    <v-footer padless fixed>
        <v-col
            class="text-center"
            cols="12"
        >
            {{this.title}}
        </v-col>
    </v-footer>
</template>
<script>
export default {
    name: 'Footer',
    props:{
        title: String,
    }
}
</script>