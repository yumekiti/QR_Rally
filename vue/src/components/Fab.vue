<template>
    <div>
        <v-btn @click="$router.push('/qr')" fixed fab bottom right style="bottom: 70px">
            <v-icon>mdi-qrcode-scan</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'Fab',
}
</script>