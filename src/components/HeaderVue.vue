<template>
  <div class="header">
    <nav class="container-fluid">
      <ul>
        <li><img class="logo" src="../assets/Les%205%20saisons_RGB_Black.jpg"></li>
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
          <li><a href="#">Plus</a></li>
        </div>

      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: "HeaderVue"
}
</script>


<style scoped>

.logo {
  width: 15%;
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
  display:flex;
  width: 100%;
  justify-content: end;
}
</style>