<template>
  <div class="article-detail">
    <div v-html="loadText" class="modal-content d-grid"></div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import {marked} from "marked";

export default {
  computed: {
    ...mapGetters("BlogsInformations", ["getCurrentBlogs"]),
    loadText() {
      return this.getCurrentBlogs && this.getCurrentBlogs.Text
          ? marked(this.getCurrentBlogs.Text)
          : '';
    }
  },
  mounted() {
    let blog = localStorage.getItem('currentBlog');
    if (blog) {
      blog = JSON.parse(blog);
      this.$store.commit('BlogsInformations/setCurrentBlog', blog);
    }
  }

}
</script>

<style>
.article-detail {
  max-width: 800px; /* Adjust the width as needed */
  margin: auto; /* This centers the article */
  padding: 2em; /* Add some padding around the content */
  font-family: 'Arial', sans-serif; /* Use a clean, readable font */
}

.article-detail h1 {
  font-size: 2.5em; /* Large, bold title */
  margin-bottom: 0.5em; /* Spacing below the title */
  color: #333; /* Dark grey color for the text */
}

.modal-content {
  font-size: 1em; /* Standard font size for content */
  line-height: 1.6; /* Spacing between lines */
  color: #666; /* Slightly lighter color for the text */
  white-space: break-spaces;

}

/* Add additional styles for subheadings, links, etc. as needed */

/* Example for a subheading, if applicable */
.article-detail h2 {
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: #333;
}

img{
  width: 100%;
}

</style>
