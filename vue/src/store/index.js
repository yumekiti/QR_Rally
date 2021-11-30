import Vue from 'vue'
import Vuex from 'vuex'

// modules
import String from '@/store/modules/string.js'
import Hash from '@/store/modules/hash.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        done: 0,
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        String, // 文字系
        Hash,   // スタンプ用ハッシュ
    }
})
