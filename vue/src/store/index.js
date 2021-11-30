import Vue from 'vue'
import Vuex from 'vuex'

// modules
import String from '@/store/modules/string.js'
import Stamp from '@/store/modules/stamp.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        String, // 文字系
        Stamp,  // スタンプ用ハッシュ
    }
})
