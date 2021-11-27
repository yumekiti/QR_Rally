import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/views/Test.vue'
import Index from '@/views/Index.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import Get from '@/views/Get.vue'
import Admin from '@/views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/stamp/:hash',
    name: 'Get',
    component: Get
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    // 本番環境は消す
    path: '/test',
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
