<template>
  <div class="header">
    <nav class="container-fluid">
      <div class="menu">
          <img class="logo" src="../assets/Les%205%20saisons_RGB_Black.jpg">
          <div class="menuRight">
            <li>
              <router-link to="/">Accueil</router-link>
            </li>
            <li>
              <router-link to="/catalogue_particulier">Catalogue particulier</router-link>
            </li>
            <li>
              <router-link to="/catalogue_pro">Catalogue pro</router-link>
            </li>
            <li>
              <!-- Utilisez le router-link ici directement -->
              <router-link to="/espace_pro">Espace professionnel</router-link>
            </li>
            <li>
              <!-- Utilisez le router-link ici directement -->
              <router-link to="/notre_histoire">Notre histoire</router-link>
            </li>
            <li>
              <!-- Utilisez le router-link ici directement -->
              <router-link to="/bouquets">Bouquets</router-link>
            </li>
            <li>
              <!-- Utilisez le router-link ici directement -->
              <router-link to="/contact">Contact nous</router-link>
            </li>
          </div>

      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: "HeaderVue"
}
</script>


<style scoped>


.menu {
  display: flex;
  width: 100%;
}
.logo {
  width: 15%;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: auto;
  color: transparent;
}

a {
  color: black;
  text-decoration: none;
}
nav ul {
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

nav ul li {
  margin-right: 2rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}

.menuRight {
  display: flex;
  width: 100%;
  justify-content: center;
  gap:5%;
}
</style>