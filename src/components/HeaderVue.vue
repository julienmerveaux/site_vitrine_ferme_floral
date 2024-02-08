<template>
  <div class="header">
    <nav class="container-fluid">
      <div class="menu-toggle" @click="toggleMenu" v-show="isMobile">☰</div>
      <ul class="nav-menu" v-show="!isMobile || isMenuVisible">
        <li class="site-title">
          <button class="boutton">
            <router-link to="/">
              <img class="image" src="../assets/Les_5_saisons_RGB_Black.png">
            </router-link>
          </button>
        </li>
        <div class="li-divCenter">
          <li class="li-center">
            <router-link class=colorRouter to="/">Accueil</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/qui-je-suis">À propos</router-link>
          </li>
          <li class="li-center">
            <router-link  v-if="isProfessional" class=colorRouter to="/catalogue_pro">Catalogue pro</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/bouquets">Bouquets</router-link>
          </li>
          <li class="li-center">
            <router-link class=colorRouter to="/contact">Contact</router-link>
          </li>
        </div>
        <div class="li-divDroite">
          <button v-if="getIsConnected" @click="logout" class="colorRouter colorTexte">Déconnecter</button>
          <router-link v-if="!getIsConnected" class="colorRouter colorTexte" to="/inscription">S'inscrire</router-link>
          <router-link v-if="!getIsConnected" class="colorRouter colorTexte" to="/login">Se connecter</router-link>
        </div>

      </ul>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderVue",
  data() {
    return {
      isMenuVisible: true,
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
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser','getIsConnected']),
    isProfessional() {
      return this.getCurrentUser.type === 'professionnel';
    },
  }
}
</script>

<style scoped>

.header {
  position: fixed;
  width: 100%;
  z-index: 100;
}

.image {
  height: 150px;
  width: 179px;
  padding: 0;
  border: none;
  background-color: transparent;
  filter: saturate(0%);
  color: #090909;
}

.boutton {
  background-color: transparent;
  border: none;
}

.colorTexte, .colorRouter {
  /* Utiliser des unités relatives pour les marges, les paddings et les font-sizes */
  padding: 5px;
  text-decoration: none;
  color: black;
  font-family: 'Belleza', sans-serif;
  font-weight: bold;
  font-size: x-large;
}

.colorTexte {
  border: solid;
  border-radius: 5px;
  background-color: #24d524;
}

.li-divDroite {
  display: flex;
  gap: 10px;

}

.menu-toggle {
  cursor: pointer;
  color: black;
  margin: 10px;
  position: fixed;
}

.nav-menu {
  display: flex;
  align-items: center; /* Centre les éléments pour les petits écrans */
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: all 0.5s ease; /* Transition douce pour l'apparition du menu */
}

.li-divCenter {
  display: flex;
}

.nav-menu > * {
  /* Flex pour permettre aux éléments de s'adapter*/
}

@media (max-width: 600px) {
  .li-divCenter {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .nav-menu {
    flex-direction: column;
  }

  .header {
    position: static !important;
  }

  .li-divDroite {
    margin-bottom: 20px;
  }

}

@media (max-width: 985px ) {
  .colorTexte, .colorRouter {
    /* Utiliser des unités relatives pour les marges, les paddings et les font-sizes */
    font-size: large;
  }
}
</style>
