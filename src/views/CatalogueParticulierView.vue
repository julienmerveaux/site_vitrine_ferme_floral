<template>
  <div v-if="!getIsConnected && showPopUp" class="popup-overlay">
    <div class="popup">
      <p class="popup_styleText">Veuillez vous connecter ou vous inscrire pour acheter.</p>
      <div class="popup-buttons">
        <router-link class="button-link" to="/inscription">S'inscrire</router-link>
        <router-link class="button-link" to="/login">Se connecter</router-link>
        <button class="button close" @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
  <div class="category-buttons">
  </div>
  <div class="filters">
    <input type="text" v-model="nom" placeholder="Recherche par nom">
    <input type="number" v-model="maxPrix" placeholder="Prix max">
    <input type="text" v-model="taille" placeholder="Taille">
    <select v-model="type" name="selectType" id="selectType">
      <option value="">Type de fleurs</option>
      <option value="fleurs-sechee">Fleurs sechées</option>
      <option value="fleurs-fraiche">Fleurs fraiche</option>
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

export default {
  components: {
    CardCatalogueParticulierVue,
  },
  props: ['type'],
  data() {
    return {
      showAll: true,
      showSechee: false,
      showFraiche: false,
      showPopUp: true,
      nom:"",
      maxPrix: null,
      taille: '',
      type:"",
    };
  },
  computed: {
    ...mapGetters("BouquetInformation", ["getAllBouquet", "getAllBouquetFraiche", "getAllBouquetSechee","getFilteredBouquets"]),
    ...mapGetters(["getIsConnected"]),
    filteredBouquets() {
      return this.getFilteredBouquets;
    }
  },
  methods: {
    ...mapActions("BouquetInformation", ["allBouquet"]),
    closePopup() {
      this.showPopUp = false;
    },
    applyFilters() {
      this.$store.dispatch('BouquetInformation/filter', {
        nom: this.nom,
        maxPrix: this.maxPrix,
        taille: this.taille,
        type:this.type,

      });
    },
    resetFilters() {
      this.$store.commit('BouquetInformation/setFilteredBouquets', this.getAllBouquet);

      this.nom = '';
      this.maxPrix = null;
      this.taille = '';
      this.type= ""
    },
  },
  created() {
    this.allBouquet();
  }
};
</script>

<style scoped>


.category-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.popup_styleText {
  font-family: 'Belleza', sans-serif;
  font-size: xx-large;;
}

.category-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.category-button:hover {
  opacity: 0.8;
}

.catalogue-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 0 20px;
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

.popup {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 25px;
  max-width: 90%;
  box-sizing: border-box;
  transform: translateY(-50%);
  position: relative;
}

.popup-message {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.popup-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.button-link {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button-link:hover, .button.close:hover {
  background-color: #367c39;
}

.button.close {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .popup-buttons {
    flex-direction: column;
  }

  .button-link, .button.close {
    width: 100%;
    margin-bottom: 10px;
  }
}





.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  background-color: #4CAF50;
  color: white;
}

/* Bouton réinitialiser */
.filters button:last-of-type {
  background-color: #f44336;
  color: white;
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
@media (

max-width: 600px) {
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
  }
}
</style>
