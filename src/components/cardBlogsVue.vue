<script>
import { marked } from "marked";

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
    renderedResume() {
      return marked(this.blogs.Resume);
    },
    loadText(){
      return marked(this.blogs.Text)
    }
  },
  methods: {
    toggleModal() {
      this.showBlogs = !this.showBlogs;
    },
    closePopup(){
      this.showBlogs = !this.showBlogs;
    }
  }
}
</script>

<template>
  <div class="divPrincipal">

    <div class="card">
      <img :src="blogs?.Image[0].url" alt="Nature" class="card-image">
      <div class="card-content">
        <div class="card-header">
          <h2 class="card-title">{{ blogs.Titre }}</h2>
        </div>
        <div class="card-info">
          <time datetime="2024-03-08">le 8 Mars 2024</time>
          <span>•</span>
          <span>{{ blogs.Temps_lecture }} minutes</span>
        </div>
        <hr class="ligne">
        <div>
          <p v-html="renderedResume"></p>
        </div>
      </div>
      <a class="button" @click="toggleModal" href="#popup">Voir plus</a>
    </div>
  </div>

  <div id="pageBlogs" class="modal" v-if="showBlogs">
    <div class="container">
      <div v-html="loadText" class="modal-content"></div>
      <a class="button" @click="closePopup">Fermer</a>
    </div>

  </div>
</template>

<style scoped>
.divPrincipal {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
  background: #f4f4f4;
}

.ligne {
  width: 100%;
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

.card {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-title {
  color: #333;
  font-size: 1.2rem;
  margin: 0;
}

.card-info {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #666;
}

.card-info span {
  margin-left: 5px;
}

@media (max-width: 767px) {
  .card {
    grid-template-columns: 1fr;
  }

  .button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .card-content {
    padding: 15px;
  }

  .card-title {
    font-size: 1rem;
  }
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