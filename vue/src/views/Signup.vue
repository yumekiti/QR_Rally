<template>
    <div>
        <Header :title="'Signup'" />
        <SignForm :signupCheck="true" />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignForm from '@/components/SignForm.vue'

export default {
    name: 'Signup',
    components: {
        Header,
        Footer,
        SignForm,
    },
}
</script>