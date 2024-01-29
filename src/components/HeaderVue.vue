<template>
  <div class="header">
    <nav class="container-fluid">
      <div class="menu-toggle" @click="toggleMenu" v-show="isMobile">☰</div>
      <ul class="nav-menu" v-show="!isMobile || isMenuVisible">
        <li class="site-title">
          <button class="image">
            <router-link to="/">
              <img src="../assets/Les_5_saisons_RGB_Black.png">
            </router-link>
          </button>
        </li>
        <div class="li-divCenter">
          <li class="li-center">
            <router-link class=colorRouter to="/">Accueil</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/espace_pro">Espace professionnel</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/catalogue_pro">Catalogue pro</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/notre_histoire">Notre histoire</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/bouquets">Bouquets</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/contact">Contact</router-link>
          </li>
        </div>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      isMenuVisible: false,
      isMobile: false,
    };
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 600;
    }
  }
}
</script>

<style scoped>
.colorRouter {
  color: black;
}
.menu-toggle {
  display: none;
  cursor: pointer;
}



.image {
  height: 150px;
  width: 179px;
  padding:0;
  border: none;
  background-color: transparent;
}

.nav-menu {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.nav-item {
  margin-right: 20px;
}

.li-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.li-divCenter {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Style pour les écrans de téléphone */
@media (max-width: 600px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 48px;
    left: 0;
    background-color: transparent;
  }

  .li-divCenter {
    flex-direction: column;
  }
}
</style>
