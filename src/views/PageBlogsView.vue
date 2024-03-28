<template>
  <h1 class="text-center">Nos articles</h1>

  <div class="filters">
    <select v-model="selectType" name="type" id="type">
      <option value="">Toutes les types</option>
      <option v-for="type in tabType" :value="type" :key="type">{{ type }}</option>
    </select>
    <button @click="applyFilters">Appliquer</button>
    <button @click="resetFilters">Réinitialiser les filtres</button>
  </div>

  <div class="wrapper">
    <!-- À LA UNE section -->
    <aside class="featured-article">
      <img :src="getBlogsUne?.Image_couverture[0].url" alt="Image mise en avant">
      <time :datetime="getBlogsUne.Temps_lecture" class="featured-article-date">{{ getBlogsUne.Temps_lecture }}
        minutes
      </time>
      <h2>{{ getBlogsUne.Titre }}</h2>
      <time :datetime="getBlogsUne.Date" class="featured-article-date">{{ getBlogsUne.Date }}</time>
    </aside>

    <!-- Articles section -->
    <section class="latest-articles">
      <div class="articles-container">
        <CardBlogsVue
            v-for="(blogs, id) in filteredBlogs"
            :key="id"
            :blogs="blogs"
        />
      </div>
    </section>
  </div>
  <h1 class="text-center">Les plus lus</h1>
  <section class="latest-articles2 wrapper">
    <div class="articles-container2">
      <CardBlogsPlusLuVue
          v-for="(blogs, index) in sortedBlogs"
          :key="index"
          :blogs="blogs"
          :index="index+1"
      />
    </div>
  </section>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CardBlogsVue from "@/components/cardBlogsVue.vue";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";
import CardBlogsPlusLuVue from "@/components/cardBlogsPlusLuVue.vue";

export default {
  props: ['type'],
  components: {CardBlogsPlusLuVue, CardCatalogueProVue, CardBlogsVue},
  data() {
    return {
      titre:"",
      selectType:""
    }
  },
  computed: {
    ...mapGetters("BlogsInformations", ["getAllBlogs", "getBlogsUne","getFilteredBlogs","getTabType"]),
    filteredBlogs() {
      return this.getFilteredBlogs;
    },

    sortedBlogs() {
      // Copie du tableau getAllBlogs
      let sorted = [...this.getAllBlogs];

      // Tri par nombre de vues (supposant que chaque blog a une propriété "views")
      sorted.sort((a, b) => b.Nombre_vu - a.Nombre_vu);

      return sorted;
    },
    tabType() {
      return this.getTabType;
    }
  },
  methods: {
    ...mapActions("BlogsInformations", ["allBlogs"]),
    applyFilters() {
      this.$store.dispatch('BlogsInformations/filter', {
        type: this.selectType,

      });
    },
    resetFilters() {
      this.$store.commit('BlogsInformations/setFilteredBlogs', this.getAllBlogs);
      this.selectType = ""
    },
  },
  created() {
    this.allBlogs()
  }
}

</script>


<style scoped>

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
}



.text-center {
  text-align: center;
}

.wrapper {
  display: flex;
  max-width: 1500px; /* Ou la largeur maximale de votre choix */
  margin: 0 auto; /* Centrer le wrapper */
  padding: 20px;
  gap: 20px; /* Espace entre la section À LA UNE et les articles */
}

.featured-article {
  width: 35%; /* Ajuster en fonction de la largeur souhaitée */
  margin-right: 20px;
}

.featured-article h2,
.latest-articles h2 {
  margin-bottom: 20px;
}

.featured-article img {
  width: 100%;
  height: auto;
}

.featured-article-date {
  color: #666;
  font-size: 0.8rem;
}

.latest-articles {
  width: 75%; /* Ajuster en fonction de la largeur souhaitée */
}

.latest-articles2 {
  width: 100%; /* Ajuster en fonction de la largeur souhaitée */
}

.articles-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.articles-container2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
}

/* Votre CSS pour .article-entry, etc., reste inchangé */

/* Styles responsives pour écrans plus petits */
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }

  .featured-article,
  .latest-articles {
    width: 100%; /* Les sections prennent toute la largeur */
  }

  .articles-container {
    grid-template-columns: 1fr; /* Une seule colonne pour les articles sur petits écrans */
  }
}

.article-entry img {
  width: 100%;
  height: auto;
}

</style>