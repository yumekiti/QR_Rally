<!-- スタンプ画面 -->
<template>
  <div>
    <Header
      :title="'QR_Rally'"
      :card="false"
      :lang="true"
    />
    <Completed />
    <Rule :title="$t('rule.title')" />
    <Card
      :title="$t('card.title')"
      :num="Number(this.$store.state.Stamp.done)"
      style="margin-bottom: 60px"
    />
    <Footer :title="$t('footer.title')" />
    <Fab></Fab>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import Rule from "@/components/Rule.vue";
import Fab from "@/components/Fab.vue";
import Completed from "@/components/Completed.vue";

export default {
  name: "Index",
  components: {
    Header,     // ヘッダー
    Card,       // カード
    Footer,     // フッター
    Rule,       // ルール
    Fab,        // QRスキャンボタン
    Completed,  // 完了時
  },
};
</script>
