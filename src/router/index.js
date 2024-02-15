import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from "@/views/HomePageView.vue";
import store from "@/stores/index.js";

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
      component: () => import('@/views/CatalogueParticulierView.vue'),
    },
    {
      path: '/catalogue_fleurs_fraiche',
      name: 'catalogue_fleurs_fraiche',
      component: () => import('@/views/catalogue_fleurs_fraicheView.vue'),
    },
    {
      path: '/catalogue_fleurs_sechee',
      name: 'catalogue_fleurs_sechee',
      component: () => import('@/views/catalogue_fleurs_secheeView.vue'),
    },
    {
      path: '/catalogue_pro',
      name: 'catalogue_pro',
      component: () => import('@/views/CatalogueProView.vue'),
      meta: { requiresType: 'professionnel' }
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
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('@/views/InscriptionView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})
router.beforeEach((to, from, next) => {
  const requiresType = to.matched.some(record => record.meta.requiresType);
  const userType = store.getters.getCurrentUser.type;

  if (requiresType && userType !== to.meta.requiresType) {
    // Rediriger vers une page d'erreur ou la page d'accueil
    next({ path: '/' }); // exemple de redirection
  } else {
    next();
  }
});
export default router
