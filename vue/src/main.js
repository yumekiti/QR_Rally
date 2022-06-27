import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";
import dotenv from 'dotenv'

dotenv.config()
const { Analytics_ID } = process.env

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: Analytics_ID || '',
  router,
});

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "ja",
  fallbackLocale: ["ja", "en"],
  silentFallbackWarn: true,
  messages: {
    ja: require("../language/Japanese.json"),
    en: require("../language/English.json"),
  },
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
