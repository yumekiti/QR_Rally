<template>
    <div>
        <v-col
            class="text-left"
            cols="12"
            style="font-size: 12px"
        >
            <div v-html="this.title" style="position:absolute; bottom:0%; left:0%;"></div>
        </v-col>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    props:{
        title: String,
    }
}
</script>