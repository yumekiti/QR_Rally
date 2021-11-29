<template>
    <div>
        <vue-qrcode v-if="targetText" :value="targetText" :options="option" tag="img"></vue-qrcode>
    </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
    name: 'QrGenerate',
    components: {
        VueQrcode
    },
    data() {
        return {
            targetText: "",
            option: {
                errorCorrectionLevel: "M",
                maskPattern: 0,
                margin: 10,
                scale: 2,
                width: 300,
                color: {
                    dark: "#000000FF",
                    light: "#FFFFFFFF"
                }
            }
        };
    },
    mounted(){
        this.targetText = '/stamp/' + this.$route.params.hash
    },
};
</script>