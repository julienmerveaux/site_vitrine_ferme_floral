import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from "@/views/HomePageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/espace_pro',
      name: 'espace_pro',
      component: () => import('@/views/EspaceProView.vue')
    }
  ]
})

export default router
