<script>
import { marked } from "marked";

export default {
  name: "cardBlogsPlusLuVue",
  props: {
    blogs: Object,
    index:Number,
  },
  data() {
    return {
      showBlogs: false
    };
  },
  computed: {
    loadText(){
      return marked(this.blogs.Text)
    }
  },
  methods: {
    toggleModal() {
      this.showBlogs = !this.showBlogs;
      const articleId = this.blogs.id;
      const articleTitle = this.blogs.Titre;
      const newUrl = `/${articleTitle.replace(/\s+/g, '-')}/${articleId}`; // Remplacer les espaces par des tirets

      // Utiliser le routeur Vue.js pour naviguer vers la nouvelle URL
      this.$router.push(newUrl);

      this.$store.dispatch('BlogsInformations/updateNombreVue',articleId);
    },
    closePopup(){
      this.showBlogs = !this.showBlogs;
    }
  }
}
</script>

<template>
  <div class="article-card" @click="toggleModal">
    <div class="article-card2">
      <div class="article-index">{{ index }}</div>
      <div class="article-content">
        <span class="article-title">{{blogs.Temps_lecture}} minutes</span>
        <h3 class="article-title">{{ blogs.Titre }}</h3>
        <div class="article-info">
          <time class="article-date" :datetime="blogs.Date">{{ blogs.Date }}</time>
          <span class="article-reading-time">3 min.</span>
        </div>

      </div>
    </div>
    <div id="greyLine"></div>

  </div>


  <div id="pageBlogs" class="modal" v-if="showBlogs">
    <div class="container">
      <div v-html="loadText" class="modal-content d-grid"></div>
      <a class="button" @click="closePopup">Fermer</a>
    </div>
  </div>
</template>

<style scoped>
#pageBlogs img{
  margin: 0 auto;
}

#greyLine{
  height: 2px;
  width:100%;
  background-color:#666;
  margin-top:10px;
  padding:0;

}
.article-index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Ajustez la largeur en fonction de vos besoins */
  height: 40px; /* Ajustez la hauteur en fonction de vos besoins */
  font-size: xxx-large; /* Taille de la police */

  margin-right: 20px; /* Espacement à droite du contenu */
}

.article-card2 {
  display: flex;
  width: 100%;
  align-items: center; /* Aligner les éléments verticalement */
}
.article-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center; /* Aligner les éléments verticalement */
}

.article-image {
  width: 135px; /* Ajuster selon la taille de l'image dans votre design */
  height: 150px; /* Ajuster pour correspondre aux dimensions de l'image de l'exemple */
  object-fit: cover; /* Pour s'assurer que l'image couvre bien la zone définie */
}

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  flex-grow: 1; /* Permet à l'article-content de prendre l'espace restant */
  padding: 10px;
}

.article-category {
  background-color: #eee; /* La couleur de fond pour la catégorie */
  font-size: 0.8rem;
  padding: 3px 6px;
  border-radius: 3px; /* Les coins arrondis */
  margin-right: 10px; /* Espace entre la catégorie et le titre */
}

.article-title {
  font-size: 1rem;
  margin: 0;
  color: #333; /* Couleur du texte pour le titre */
}

.article-info {
  display: flex;
  justify-content: space-between; /* Espacer la date et le temps de lecture */
  font-size: 0.8rem;
  color: #666;
}

.button {
  margin-top: 5px; /* Ajuster l'espacement selon votre design */
  padding: 5px 10px;
  text-decoration: none;
  color: #008cba; /* La couleur de votre choix pour le bouton */
  border: 1px solid #ccc; /* Bordure du bouton */
  border-radius: 3px; /* Coins arrondis du bouton */
}

.button:hover {
  background-color: #005f73; /* Une teinte plus foncée pour l'état de survol */
}
.button {
  padding: 10px 20px;
  margin: 20px auto;
  display: block;
  color: #008CBA;
  background-color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #005f73; /* A darker shade for hover state */
}

.card-info span {
  margin-left: 5px;
}




.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8); /* Dim the background */
  z-index: 1000; /* Ensure it's above other content */
}

.modal-content {
  width: 90%; /* Responsive width */
  max-width: 800px; /* Max width for larger screens */
  max-height: 80%; /* Max height for the modal */
  overflow-y: auto; /* Allow scrolling for longer content */
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative; /* For positioning the close button */
}
</style>