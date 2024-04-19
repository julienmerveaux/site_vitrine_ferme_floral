<template>
  <div class="article-card" @click="toggleModal">
    <div class="article-card2">
      <img class="article-image" :src="blogs?.Image_couverture[0].url" alt="Image de l'article">
      <div class="article-content">
        <span class="article-category">{{blogs.Type}}</span>
        <span class="article-category">{{blogs.Temps_lecture}} minutes</span>
        <h3 class="article-title">{{ blogs.Titre }}</h3>
        <div class="article-info">
          <time class="article-date" :datetime="blogs.Date">{{ blogs.Date }}</time>
          <span class="article-reading-time">3 min. de lecture</span>
        </div>
      </div>
    </div>
    <div id="greyLine"></div>
  </div>

  <div id="pageBlogs" class="modal" v-if="showBlogs">
    <div class="container">
      <div v-html="loadText" class="modal-content"></div>
      <a class="button" @click="closePopup">Fermer</a>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import {mapGetters} from "vuex";

export default {
  name: "cardBlogsVue",
  props: {
    blogs: Object
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
      const articleId = this.blogs.id;
      const articleTitle = this.blogs.Titre_url
      this.$store.dispatch("BlogsInformations/setCurrentBlogs", this.blogs);
      this.$router.push({ name: 'ArticleDetail', params: { id: articleId, titre:articleTitle} });
      this.$store.dispatch('BlogsInformations/updateNombreVue',articleId);
    },

    closePopup(){
      this.showBlogs = !this.showBlogs;
    }
  }
}
</script>

<style scoped>
.article-card2 {
  display: flex;
  width: 100%;
  align-items: center;

}

.article-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
}

.article-image {
  width: 135px;
  height: 150px;
  object-fit: cover;
}

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  flex-grow: 1;
  padding: 10px;
  background-color: var(--couleur-separeted-part);
}

.article-category {
  font-size: 0.8rem;
  padding: 3px 6px;
  border-radius: 3px;
  margin-right: 10px;
}

.article-title {
  font-size: 1rem;
  margin: 0;
  color: #333;
}

.article-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
}

.article-date {
  color: #666;
}

.article-reading-time {
  color: #666;
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
  background-color: #005f73;
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 800px;
  max-height: 80%;
  overflow-y: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  word-wrap: break-word; /* Ajout de la propriété pour que le texte s'adapte à la taille de la div */
}

@media (max-width: 1000px) {
  .article-info {
    flex-direction: column;
  }

}
</style>
