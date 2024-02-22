<template>
  <div v-if="!getIsConnected && showPopUp" class="popup-overlay">
    <div class="popup">
      <p>Veuillez vous connecter ou vous inscrire pour acheter.</p>
      <div class="divButtonPopup">
        <router-link class="styleRouter" to="/inscription">S'inscrire</router-link>
        <router-link class="styleRouter" to="/login">Se connecter</router-link>
        <button @click="closePopup">Fermer</button>
      </div>

    </div>
  </div>
  <div class="button-container">
    <button class="button" @click="showAll = true; showSechee = false; showFraiche = false;">Toutes catégories</button>
    <button class="button" @click="showAll = false; showSechee = false; showFraiche = true;">Fleurs fraiches</button>
    <button class="button" @click="showAll = false; showSechee = true; showFraiche = false;">Fleurs séchées</button>
  </div>
  <div class="d-grid">
    <CardCatalogueParticulierVue v-for="(bouquet, id) in filteredBouquets" :key="id"
                                 :bouquet="bouquet"></CardCatalogueParticulierVue>
  </div>
</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {CardCatalogueParticulierVue},
  props: ['type'],

  data() {
    return {
      showAll: true,
      showSechee: false,
      showFraiche: false,
      showPopUp: true
    };
  },
  computed: {
    ...mapGetters("BouquetInformation", ["getAllBouquet", "getAllBouquetFraiche", "getAllBouquetSechee"]),
    ...mapGetters(["getIsConnected"]),
    filteredBouquets() {
      if (this.showFraiche) {
        return this.getAllBouquetFraiche;
      } else if (this.showSechee) {
        return this.getAllBouquetSechee;
      }
      return this.getAllBouquet;
    }
  },
  methods: {
    ...mapActions("BouquetInformation", ["allBouquet"]),
    closePopup() {
      this.showPopUp = false;
    }
  },
  created() {
    this.allBouquet();
  }
};
</script>


<style scoped>

.divButtonPopup {
  display: flex;
  justify-content: space-between;
}
.styleRouter {
  text-decoration: none;
  color: black;

}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Fond flou */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.d-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 1773px;
}

.button {
  background-color: #f8f6f6;
  color: black;
  box-shadow: 0 13px 10px -7px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.4s ease;
  cursor: pointer;
  font-size: x-large; /* Adjusted for modern readability */
  margin-top: 20px;
}

.button:hover {
  background-color: #45a049;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 75px;
  margin-bottom: 50px;
  flex-wrap: wrap; /* Ensures responsiveness */
}

@media only screen and (max-width: 768px) {
  .d-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .button-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .button {
    font-size: initial;
  }
}
</style>
