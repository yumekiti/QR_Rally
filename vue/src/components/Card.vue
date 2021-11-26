<template>
    <div class="mt-3" style="height: 300px;">
        <v-container>
            <p>スタンプカード</p>
            <v-row>
                <v-col
                    v-for="(n, index) in stamp.length"
                    :key="index"
                    cols="4"
                    style="border: 1px solid;"
                >
                <div class="text-center pa-3">
                    <v-icon>{{stamp[index].icon}}</v-icon>
                </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Card',
    data: () => {
        return{
            stamp:[
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
                {icon: 'mdi-checkbox-blank-circle'},
            ]
        }
    },
    props: {
        num: Number
    },
    created() {
        for(let i = 0; i < this.num; i++){
            this.stamp[i].icon = 'mdi-check-circle'
        }
    },
}
</script>