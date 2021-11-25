import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null, 
        datas: [],
        errors: [],
    },
    mutations: {
        set: (state, {response, url, httpMethod}) => {
            switch(httpMethod) {
                case 'get': {
                    if(url.match(/\//)){
                        state.datas[url.substring(0, url.indexOf("/"))] = response.data
                    }else{
                        state.datas[url] = response.data
                    }
                    break
                }
                case 'post': {
                    state.datas[url].push(response.data)
                    break
                }
                case 'put': {
                    state.datas[url.substring(0, url.indexOf("/"))] = response.data
                    break
                }
                case 'delete': {
                    state.datas[url.substring(0, url.indexOf("/"))] = state.datas[url.substring(0, url.indexOf("/"))].filter(item => {if(item.id != response.data) return true})
                    break
                }
            }
        },
    },
    actions: {
        async get({ commit }, {url: url}){
            await axios
                .get('/api/' + url, {url: url})
                .then( response =>{
                    commit('set', {response: response, url: url, httpMethod: 'get'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async post({ commit }, {url: url, formData: formData}){
            formData.url = url
            await axios
                .post('/api/' + url, formData)
                .then( response =>{
                    commit('set', {response: response, url: url, httpMethod: 'post'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async put({ commit }, {url: url, formData: formData}){
            formData.url = url
            await axios
                .put('/api/' + url, formData)
                .then( response =>{
                    commit('set', {response: response, url: url, httpMethod: 'put'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async delete({ commit }, {url: url}){
            await axios
                .delete('/api/' + url, {url: url})
                .then( response =>{
                    commit('set', {response: response, url: url, httpMethod: 'delete'})
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    modules: {
    }
})
