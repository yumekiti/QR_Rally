import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 本番環境は消す
    path: '/',
    name: 'Test',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
