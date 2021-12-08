<template>
    <div>
        <v-col
            class="text-left"
            cols="12"
            style="font-size: 12px"
            v-html="this.title"
        >
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