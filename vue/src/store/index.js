import Vue from "vue";
import Vuex from "vuex";

// modules
import Language from "@/store/modules/language.js";
import Stamp from "@/store/modules/stamp.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Language, // 文字系
    Stamp, // スタンプ用ハッシュ
  },
});
