import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null, 
        data: [],
        error: null,
    },
    mutations: {
        set: (state, {response, url, httpMethod}) => {
            switch(httpMethod) {
                case 'get': {
                    if(url.match(/\//)){
                        state.data[url.substring(0, url.indexOf("/"))] = response.data
                    }else{
                        state.data[url] = response.data
                    }
                    break
                }
                case 'post': {
                    state.data[url].push(response.data)
                    break
                }
                case 'put': {
                    state.data[url.substring(0, url.indexOf("/"))] = response.data
                    break
                }
                case 'delete': {
                    state.data[url.substring(0, url.indexOf("/"))] = state.data[url.substring(0, url.indexOf("/"))].filter(item => {if(item.id != response.data) return true})
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
                    if (error.response.status === 401) {
                        router.push('/signin')
                    }
                    this.state.error = error
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
                    if (error.response.status === 401) {
                        router.push('/signin')
                    }
                    this.state.error = error
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
                    if (error.response.status === 401) {
                        router.push('/signin')
                    }
                    this.state.error = error
                })
        },
        async delete({ commit }, {url: url}){
            await axios
                .delete('/api/' + url, {url: url})
                .then( response =>{
                    commit('set', {response: response, url: url, httpMethod: 'delete'})
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        router.push('/signin')
                    }
                    this.state.error = error
                })
        },
    },
    modules: {
    }
})
