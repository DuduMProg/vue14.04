import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      paht: '/',
      name: 'users',
      component: () => import('../views/userView.vue')
    },
    {
      path: '/users/:username',
      name: 'user-detail',
      component: () => import('../views/userDetails.vue')
    }
  ],
})

export default router
