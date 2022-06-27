<template>
  <div>
    <div
      class="main__stamp"
      v-for="(stamps, index) in this.$store.state.Stamp.hash"
      :key="index"
    >
      <div
        class="main__stamp--number"
        v-for="(stamp, index) in stamps"
        :key="index"
      >
        <div v-if="!stamp.status">
          {{ index + 1 }}
        </div>
        <div v-else>
          <v-icon style="font-size: 80px" :color="stamp.color">{{
            stamp.icon
          }}</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    num: Number,
  },
};
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
  width: 100px;
  height: 100px;
  margin: 0.6rem;
  color: #d2d2d2;
  border-spacing: 100px;
  border: 0.15rem #d2d2d2 dotted;
  border-spacing: 10px 10px;
  border-radius: 100%;
}
</style>
