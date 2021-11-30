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
        getStamp(modules, hash){
            const getHash = modules.Stamp.hash.find(item => item.hash === hash)
            if(getHash && Boolean(!getHash.state)){
                window.sessionStorage.setItem(['stamp_' + getHash.name],[1])
                window.sessionStorage.setItem(['done'],[Number(this.state.Stamp.done)+1]);
            }
        }
    },
    actions: {
    },
    modules: {
        String, // 文字系
        Stamp,  // スタンプ用ハッシュ
    }
})
