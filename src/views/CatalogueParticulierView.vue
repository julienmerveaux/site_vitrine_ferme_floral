<template>
  <div class="catalogueStyle">
    <div id="kuuFormContent"></div>
  </div>

</template>

<script>
import CardCatalogueParticulierVue from "@/components/CardCatalogueParticulierVue.vue";
import {mapActions, mapGetters} from "vuex";
import {embedKuuFormParticulier} from '@/script/script.js';
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
      nom: "",
      maxPrix: null,
      selectTaille: '',
      selectType: "",
    };
  },
  mounted() {
    embedKuuFormParticulier();
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
    closePopup() {
      this.showPopUp = false;
    },
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
#kuuFormContent {
  width: 50%;
}

.catalogueStyle {
  display: flex;
  justify-content: center;
  align-items: center;
}

#kuuFormContent {
  color: blue !important;
}
</style>
