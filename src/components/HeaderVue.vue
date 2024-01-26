<template>
  <div class="header">
    <nav class="container-fluid">
      <ul>
        <li><strong>My Website</strong></li>
      </ul>
      <ul class="ul-center">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/espace_pro">Espace professionnel</router-link></li>
        <li><router-link to="/catalogue_pro">Catalogue pro</router-link></li>
        <li><router-link to="/notre_histoire">Notre histoire</router-link></li>
        <li><router-link to="/bouquets">Bouquets</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  </div>

</template>

<script>
export default {
  name: "HeaderVue"
}
</script>


<style scoped>
.ul-center {
  display: flex;
  justify-content: center;
}

</style>