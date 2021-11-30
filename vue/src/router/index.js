import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Get from '@/views/Get.vue'
import Qr from '@/views/Qr.vue'
import QrGenerate from '@/views/QrGenerate.vue'

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
    path: '/qr',
    name: 'Qr',
    component: Qr
  },
  {
    path: '/qr/:hash',
    name: 'QrGenerate',
    component: QrGenerate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
