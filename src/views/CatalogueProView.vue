<template>
  <div class="divIntroduction">
    <p class="colorTextIntro">Ce qui distingue La ferme florale Les 5 Saisons, c'est notre engagement envers l'excellence et l'originalité.
      Chacune de nos créations est le fruit d'un savoir-faire artisanal, alliant expertise florale et créativité
      débordante. Nous mettons un point d'honneur à sélectionner nos fleurs issus de notre production afin de garantir la
      fraîcheur et la qualité de nos bouquets et compositions!</p>
  </div>
  <div class="filters">
    <input type="text" v-model="nom" placeholder="Recherche par nom">
    <input type="number" v-model="maxPrix" placeholder="Prix max">
    <select v-model="selectCouleur" autocomplete="off" name="selectCouleur" id="selectCouleur">
      <option value="">Toutes les Couleurs</option>
      <option v-for="couleur in tabColor" :value="couleur" :key="couleur">{{ couleur}}</option>
    </select>

    <button @click="applyFilters">Appliquer</button>
    <button @click="resetFilters">Réinitialiser les filtres</button>
    <div class="catalogue-grid">
      <CardCatalogueProVue v-for="(fleurs, id) in filteredFleurs" :key="id" :fleurs="fleurs"></CardCatalogueProVue>
    </div>
  </div>
</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";

export default {
  components: {
    CardCatalogueProVue,
  },
  props: ['type'],
  data() {
    return {
      showPopUp: true,
      nom:"",
      maxPrix: null,
      selectCouleur: '',
    };
  },
  computed: {
    ...mapGetters("PlantesInformation", ["getAllFleurs", "getFilteredFleurs", "getTabColor"]), // Assurez-vous d'inclure getTabColor ici
    filteredFleurs() {
      console.log(this.getFilteredFleurs)
      return this.getFilteredFleurs;
    },
    tabColor() {
      return this.getTabColor; // Utilisez getTabColor pour obtenir les couleurs uniques depuis Vuex
    }
  },
  methods: {
    ...mapActions("PlantesInformation", ["allFleurs"]),
    closePopup() {
      this.showPopUp = false;
    },
    applyFilters() {
      this.$store.dispatch('PlantesInformation/filter', {
        nom: this.nom,
        maxPrix: this.maxPrix,
        couleur: this.selectCouleur, // Corrigez cette ligne pour utiliser selectCouleur
      });
    },
    resetFilters() {
      this.$store.commit('PlantesInformation/setFilteredFleurs', this.getAllFleurs);
      this.nom = '';
      this.maxPrix = null;
      this.couleur = '';

    },
  },
  created() {
    this.allFleurs();
  }
};
</script>

<style scoped>

.divIntroduction {
  background: #f8f8f8;
  padding: 10px 0;
}

.colorTextIntro {
  text-align: center;
  width: 50%;
  margin:0 auto;
  font-size: xx-large;
  font-family: 'Belleza', sans-serif;
}

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
