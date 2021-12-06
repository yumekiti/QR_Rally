<template>
    <div class="main__rule">
        <h2 style="white-space: pre-wrap;" v-text="this.title"></h2>
        <p style="white-space: pre-wrap;" v-text="this.detail"></p>
    </div>
</template>
<script>
export default {
    name: 'Rule',
    props:{
        title: String,
        detail: String,
    }
}
</script>
<style scoped>
/* ルール説明部分 */
.main__rule {
    text-align: center;
}

.main__rule h2 {
    font-size: 1.6rem;
    margin: 3.2rem 0 0.8rem 0;
    color: #25a5ec;
}

.main__rule p {
    font-size: 1.2rem;
    padding: 1.6rem;
    letter-spacing: 0.1rem;
    color: #fff;
    background: #25a5ec;
}
</style>