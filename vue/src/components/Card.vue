<template>
  <div>
    <div class="main__stamp" v-for="(stamps, i) in groupedArray" :key="i">
      <div class="main__stamp--number" v-for="(stamp, j) in stamps" :key="j">
        <div v-if="!stamp.status">{{ i + i + (j + i + 1) }}</div>
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
  computed: {
    groupedArray() {
      const base = this.$store.state.Stamp.hash.length;
      const split_cnt = 3; // 何個ずつに分割するか
      const grouped_array = [];
      for (let i = 0; i < Math.ceil(base / split_cnt); i++) {
        let multiple_cnt = i * split_cnt; // 3の倍数
        let result = this.$store.state.Stamp.hash.slice(
          multiple_cnt,
          multiple_cnt + split_cnt
        );
        grouped_array.push(result);
      }
      return grouped_array;
    },
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
