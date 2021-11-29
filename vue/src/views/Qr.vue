<template>
    <div>
        <Header :title="'QR_Reader'"></Header>
        <QrReader></QrReader>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import QrReader from '@/components/QrReader.vue'

export default {
    components: {
        Header,
        QrReader,
    },
}
</script>
