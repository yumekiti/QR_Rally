<template>
    <div>
        <v-btn @click="$router.push('/qr')" fixed fab bottom right style="bottom: 60px; background-color: white;">
            <v-icon style="font-size: 36px;">mdi-qrcode</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'Fab',
}
</script>