import Vue from 'vue'
import Vuex from 'vuex'

// modules
import String from '@/store/modules/string.js'
import Hash from '@/store/modules/hash.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // スタンプのゲットした数
        done: 0,
    },
    mutations: {
        getStamp(modules, hash){
            console.log(modules.Hash.find(item => item.hash === hash));
        }
    },
    actions: {
    },
    modules: {
        String, // 文字系
        Hash,   // スタンプ用ハッシュ
    }
})
