import LoginView from '@/views/LoginView.vue'
import BookView from '@/views/BookView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LoginView
    },
    {
      path: "/library",
      component: BookView
    }
  ]
})

export default router
