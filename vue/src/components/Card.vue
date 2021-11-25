<template>
    <div>
        <v-container>
            <p>スタンプカード</p>
            <v-row>
                <v-col
                    v-for="n in num"
                    :key="n"
                    cols="4"
                    style="border: 1px solid;"
                >
                    <div
                        class="pa-3 text-center"
                    >
                    {{n}}
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