<template>
    <div class="mt-3" style="height: 300px;">
        <v-container>
            <p>スタンプカード</p>
            <v-row>
                <v-col
                    v-for="n in 9"
                    :key="n"
                    cols="4"
                    style="border: 1px solid;"
                >
                    <div v-if="num">
                        <div class="pa-3 text-center" v-for="num in num" :key="num">
                            <v-icon>
                                {{n == num ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle'}}
                            </v-icon>
                        </div>
                    </div>
                    <div class="pa-3 text-center" v-else>
                        <v-icon>mdi-checkbox-blank-circle</v-icon>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        num: Number
    },
}
</script>