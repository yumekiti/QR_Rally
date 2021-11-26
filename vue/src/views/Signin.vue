<template>
    <div>
        <Header :title="'Signin'" />
        <SigninForm />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SigninForm from '@/components/SigninForm.vue'

export default {
    name: 'Signin',
    components: {
        Header,
        SigninForm,
        Footer,
    }
}
</script>