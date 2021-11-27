<template>
    <div>
        <Header :title="'Signin'" />
        <SignForm :signupCheck="false" />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignForm from '@/components/SignForm.vue'

export default {
    name: 'Signin',
    components: {
        Header,
        Footer,
        SignForm,
    },
}
</script>