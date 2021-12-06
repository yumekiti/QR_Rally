<template>
    <div>
        <header class="header">
        <h1>QR-rally</h1>
        <select name="Language" id="Language">
            <option value="Lang">Language</option>
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="ch">中國人</option>
        </select>
      </header>
    </div>
</template>
<script>
import Cookies from 'js-cookie';

export default {
    name: 'Header',
    props: {
        title: String,
        card: Boolean,
        lang: Boolean,
    },
    methods:{
        indexLink(){
            if(this.$route.path != '/'){
                this.$router.push('/')
            }
        },
        language(value){
            Cookies.set('language', value)
            this.$i18n.locale = value;
        }
    },
    mounted() {
        this.$i18n.locale = Cookies.get('language')
    },
}
</script>
<style scoped>
div {
    font-size: 62.5%;
}

/* header部分 */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    width: 100%;
    height: 58px;
    box-shadow: 0px 4px 20px rgba(205, 205, 205, 0.5);
    background: #fff;
}

/* 言語選択部分 */
#Language {
    border: none;
}
</style>