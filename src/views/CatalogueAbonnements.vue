<template>
  <div v-if="!getIsConnected && showPopup" class="popup-overlay">
    <Popup
        :showPopup="showPopup"
        @close="showPopup = false"
        text="Veuillez vous connecter ou vous inscrire pour acheter."
    />
  </div>
  <div class="divIntroduction">
    <p class="colorTextIntro">Ce qui distingue La ferme florale Les 5 Saisons, c'est notre engagement envers
      l'excellence et l'originalité.
      Chacune de nos créations est le fruit d'un savoir-faire artisanal, alliant expertise florale et créativité
      débordante. Nous mettons un point d'honneur à sélectionner nos fleurs issues de notre production afin de garantir
      la
      fraîcheur et la qualité de nos bouquets et compositions!</p>
  </div>

  <div class="filters">
    <input type="number" v-model="maxPrix" placeholder="Prix max">
    <select v-model="selectTaille" name="taille" id="taille">
      <option value="">Toutes les tailles</option>
      <option v-for="taille in tabTaille" :value="taille" :key="taille">{{ taille }}</option>
    </select>
    <select v-model="selectType" name="type" id="type">
      <option value="">Toutes les types</option>
      <option v-for="type in tabType" :value="type" :key="type">{{ type }}</option>
    </select>
    <button @click="applyFilters">Appliquer</button>
    <button @click="resetFilters">Réinitialiser les filtres</button>

    <div class="catalogue-grid">
      <CardCatalogueParticulierVue v-for="(bouquet, id) in filteredBouquets" :key="id"
                                   :bouquet="bouquet"></CardCatalogueParticulierVue>
    </div>
  </div>
</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";
import Popup from "@/components/Popup.vue";

export default {
  components: {
    Popup,
    CardCatalogueParticulierVue,
  },
  props: ['type'],
  data() {
    return {
      showAll: true,
      showSechee: false,
      showFraiche: false,
      showPopup: true,
      nom: "",
      maxPrix: null,
      selectTaille: '',
      selectType: "",
    };
  },
  computed: {
    ...mapGetters("BouquetInformation", ["getAllBouquet", "getAllBouquetFraiche", "getAllBouquetSechee", "getFilteredBouquets", "getTabTaille", "getTabType"]),
    ...mapGetters("UsersInformation", ["getIsConnected"]),
    filteredBouquets() {
      return this.getFilteredBouquets;
    },
    tabTaille() {
      return this.getTabTaille;
    },
    tabType() {
      return this.getTabType;
    }
  },
  methods: {
    applyFilters() {
      this.$store.dispatch('BouquetInformation/filter', {
        maxPrix: this.maxPrix,
        taille: this.selectTaille,
        type: this.selectType,

      });
    },
    resetFilters() {
      this.$store.commit('BouquetInformation/setFilteredBouquets', this.getAllBouquet);

      this.nom = '';
      this.maxPrix = null;
      this.selectTaille = '';
      this.selectType = ""
    },
  },
};
</script>

<style scoped>

.divIntroduction {
  padding: 10px 0;
}

.colorTextIntro {
  text-align: center;
  width: 90%; /* Réduire la largeur du texte sur les petits écrans */
  margin: 0 auto;
  font-size: 20px; /* Réduire la taille du texte sur les petits écrans */
  font-family: 'Belleza', sans-serif;
  color: var(--couleur-texte);
  white-space: break-spaces;
}

.catalogue-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Réduire l'espace entre les cartes sur les petits écrans */
  padding: 0 10px; /* Réduire le padding sur les petits écrans */
  margin-bottom: 20px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

#taille, #type {
  background-color: white;
}

.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
}

.filters input[type="text"],
.filters input[type="number"],
.filters select {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filters button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.filters button:hover {
  opacity: 0.8;
}

/* Bouton appliquer */
.filters button:first-of-type {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);
}

/* Bouton réinitialiser */
.filters button:last-of-type {
  background-color: var(--couleur-button);
  color: var(--couleur-button-texte);
}

/* Style pour les grands écrans */
@media (min-width: 768px) {
  .filters {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .filters input[type="text"],
  .filters input[type="number"],
  .filters select {
    margin: 0;
  }

}

/* Style pour les écrans très petits */
@media (max-width: 600px) {
  .filters {
    width: 100%;
    box-sizing: border-box;
  }

  .filters input[type="text"],
  .filters input[type="number"],
  .filters select {
    width: calc(100% - 20px); /* Subtract padding */
  }

  .catalogue-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px; /* Réduire l'espace entre les cartes sur les très petits écrans */
  }
}
</style>
