import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/v-bind',
      name: 'VBind',
      component: () => import('../views/VBind.vue')
    },
    {
      path: '/v-for',
      name: 'VFor',
      component: () => import('../views/VFor.vue')
    },
    {
      path: '/props',
      name: 'Props',
      component: () => import('../views/Props.vue')
    },
    {
      path: '/emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue')
    },

  ]
})

export default router
