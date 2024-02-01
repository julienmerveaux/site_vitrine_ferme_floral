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
    },
    {
      path: '/catalogue_particulier',
      name: 'catalogue_particulier',
      component: () => import('@/views/CatalogueParticulierView.vue')
    },
    {
      path: '/catalogue_pro',
      name: 'catalogue_pro',
      component: () => import('@/views/CatalogueProView.vue')
    },
    {
      path: '/qui-je-suis',
      name: 'notre_histoire',
      component: () => import('@/views/PageHistoireView.vue')
    },
    {
      path: '/bouquets',
      name: 'bouquets',
      component: () => import('@/views/PageBouquetView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Réinitialise le scroll à la position supérieure (0, 0) à chaque changement de page.
    return { left: 0, top: 0 }
  },
})

export default router
