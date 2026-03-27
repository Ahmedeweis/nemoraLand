import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/interest-list',
    name: 'interest-list',
    component: () => import('../views/interest-list.vue')
  },
  {
    path: '/merchants',
    name: 'merchants',
    component: () => import('../views/merchants/index.vue')
  },
  {
    path: '/merchants/:id',
    name: 'merchant-details',
    component: () => import('../views/merchants/[id].vue')
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import('../views/products/[id].vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
