<template>
  <h1 class="text-center">Nos derniers articles </h1>
  <div class="d-grid">
    <CardBlogsVue v-for="(blogs, id) in getAllBlogs" :key="id" :blogs="blogs"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CardBlogsVue from "@/components/cardBlogsVue.vue";
import CardCatalogueProVue from "@/components/CardCatalogueProVue.vue";

export default {
  components: {CardCatalogueProVue, CardBlogsVue},
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters("BlogsInformations",["getAllBlogs"])
  },
  methods:{
    ...mapActions("BlogsInformations",["allBlogs"])
  },
  created() {
    this.allBlogs()
  }
}

</script>


<style scoped>

.d-grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.text-center{
  text-align: center;
}
</style>