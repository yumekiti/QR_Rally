<template>
    <div class="mt-3">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <strong>{{this.$store.state.String.jp.rule.title}}</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    {{this.$store.state.String.jp.rule.detail}}
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Rule',
}
</script>