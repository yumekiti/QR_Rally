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
    component: Index,
    meta: {
      title: 'QR_Rally',
      desc: 'メイン画面でスタンプカードなどを表示している'
    }
  },
  {
    path: '/stamp/:hash',
    name: 'Get',
    component: Get,
  },
  {
    path: '/qr',
    name: 'Qr',
    component: Qr,
    meta: {
      title: 'QR_reader',
      desc: 'QRコード読み取る'
    }
  },
  {
    path: '/qr/:hash',
    name: 'QrGenerate',
    component: QrGenerate,
    meta: {
      title: 'generate',
      desc: 'QRコード生成する'
    }
  },
]

const DEFAULT_TITLE = 'QR_Rally'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
