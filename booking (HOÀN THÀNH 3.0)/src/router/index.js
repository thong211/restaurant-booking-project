import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gioithieu',
      name: 'gioithieu',
      component: () => import('../views/GioiThieu.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/oder',
      name: 'oder',
      component: () => import('../views/Oder.vue')

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dangky',
      name: 'dangky',
      component: () => import('../views/Dangky.vue')
    },
    {
      path: '/thanhtoan',
      name: 'thanhtoan',
      component: () => import('../views/Thanhtoan.vue')
    },
  ]

})

export default router
