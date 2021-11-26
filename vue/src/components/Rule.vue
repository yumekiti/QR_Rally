<template>
    <div class="mt-3">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <strong>ルール</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <p>ようこそ {{this.name}}</p>
                    あーだこーだルール説明ルールルールルールルールルールルールルールルールルールルールルールルールルールルールルール
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Rule',
    props:{
        name: String
    }
}
</script>