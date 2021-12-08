<template>
    <div class="main__stamp">
        <p class="main__stamp--number">
            1
            <!-- <v-icon style="font-size: 50px;">mdi-earth</v-icon> -->
        </p>
        <p class="main__stamp--number">2</p>
        <p class="main__stamp--number">3</p>
        <p class="main__stamp--number">4</p>
        <p class="main__stamp--number">5</p>
        <p class="main__stamp--number">6</p>
        <p class="main__stamp--number">7</p>
        <p class="main__stamp--number">8</p>
        <p class="main__stamp--number">9</p>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: String,
        num: Number,
    },
}
</script>
<style scoped>
/* スタンプカード部分 */
.main__stamp {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 3rem;
    color: #cdcdcd;
    margin-top: 2.1rem;
}

/* スタンプカード番号部分 */
.main__stamp .main__stamp--number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 0.8rem;
    color: #d2d2d2;
    border-spacing: 100px;
    border: 0.2rem #d2d2d2 dotted;
    border-spacing: 10px 10px;
    border-radius: 100%;
}
</style>