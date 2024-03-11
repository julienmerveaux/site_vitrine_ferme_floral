<script>
import {RouterLink, RouterView} from 'vue-router'
import HeaderVue from "@/components/HeaderVue.vue";
import PiedDePageVue from "@/components/PiedDePageVue.vue";
import ContenuVue from "@/components/ContenuVue.vue";
import StripePayment from "@/components/StripePayment.vue";
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PanierParticulierView",
  components: {PiedDePageVue, HeaderVue},

  methods: {
    ...mapActions("BouquetInformation", ["allBouquet"]),
  },
  created() {
    this.allBouquet()
    this.$store.dispatch('PanierParticulier/initializePanier');
    this.$store.dispatch('PanierPro/initializePanier');
  }
}
</script>

<template>
  <div class="app">
    <HeaderVue id="main" class="header"></HeaderVue>
    <div class="content">
      <RouterView/>
    </div>
    <PiedDePageVue></PiedDePageVue>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Fait en sorte que l'application occupe au moins toute la hauteur de la fenêtre */
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff; /* Ajoutez une couleur de fond si nécessaire */
  z-index: 1000; /* Assurez-vous que l'en-tête est au-dessus du contenu */
}


.content {
  flex-grow: 1; /* Fait en sorte que le contenu prenne toute la hauteur restante */
  padding-top: 153px /* Hauteur de l'en-tête (ajoutez la hauteur de l'en-tête ici) */;
  /* Ajoutez d'autres styles pour le contenu si nécessaire */
}

.footer {
  /* Styles pour votre pied de page */
}

@media (max-width: 600px) {
  .content {
    padding-top: 0;
    margin-top: 50px;
  }
}
</style>
