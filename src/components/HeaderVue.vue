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
          <li class="li-center" :class="{ 'active': isCurrentRoute('/') }">
            <router-link class=colorRouter to="/">Accueil</router-link>
          </li>
          <li class="li-center" :class="{ 'active': isCurrentRoute('/qui-je-suis') }">
            <router-link class=colorRouter to="/qui-je-suis">À propos</router-link>
          </li>
          <li class="li-center" :class="{ 'active': isCurrentRoute('/catalogue_particulier') }">
            <router-link v-if="!isProfessional" class=colorRouter to="/catalogue_particulier">Boutique</router-link>
          </li>
          <li class="li-center" :class="{ 'active': isCurrentRoute('/catalogue_pro') }">
            <router-link  v-if="isProfessional" class=colorRouter to="/catalogue_pro">Boutique</router-link>
          </li>
          <li class="li-center" :class="{ 'active': isCurrentRoute('/bouquets') }">
            <router-link v-if="!isProfessional" class=colorRouter to="/blogs">Blogs</router-link>
          </li>
          <li class="li-center" :class="{ 'active': isCurrentRoute('/contact') }">
            <router-link class=colorRouter to="/contact">Contact</router-link>
          </li>
        </div>

        <div class="li-divDroite">
          <div v-if="getIsConnected" class="profile-menu">
            <img
                src="../assets/profil.png"
                alt="Profil"
                class="profile-img"
                @click="toggleProfileMenu"
            />
            <ul v-show="isProfileMenuVisible" class="dropdown-menu">
              <li class="text-center">{{getCurrentUser.name}} {{getCurrentUser.firstname}}</li>
              <li><router-link to="/commandes">Mes commandes</router-link></li>
              <li><router-link to="/abonnements">Mes abonnements</router-link></li>
              <!-- Ajoutez plus d'options ici si nécessaire -->
            </ul>
          </div>
          <button v-if="getIsConnected" @click="logout" class="colorRouter colorTexte">Déconnecter</button>
          <router-link v-if="!getIsConnected" class="colorRouter colorTexte" to="/inscription">S'inscrire</router-link>
          <router-link v-if="!getIsConnected" class="colorRouter colorTexte" to="/login">Se connecter</router-link>
          <router-link v-if="getCurrentUser.type ==='particulier'" class="colorRouter colorTexte alignementStyle" to="/panierParticulier">Votre panier</router-link>
          <router-link v-if="getCurrentUser.type ==='professionnel'" class="colorRouter colorTexte alignementStyle" to="/panierPro">Votre panier</router-link>
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
      isProfileMenuVisible: false,
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
      this.$store.dispatch('UsersInformation/logout');
      this.$router.push('/');
    },
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
    toggleProfileMenu() {
      this.isProfileMenuVisible = !this.isProfileMenuVisible;
    },
  },
  computed: {
    ...mapGetters("UsersInformation",["getCurrentUser","getIsConnected"]),
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
.text-center {
  text-align: center;
}
.profile-menu {
  position: relative;
}

.profile-img {
  height: 40px; /* Taille de l'image du profil */
  width: 40px; /* Taille de l'image du profil */
  cursor: pointer;
  border-radius: 20px; /* Pour rendre l'image circulaire */
}

.dropdown-menu {
  position: absolute;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0;
  margin-top: 5px;
  list-style-type: none;
  width: 200px; /* Largeur du menu déroulant */
}

.dropdown-menu li {
  padding: 10px;
  border-bottom: 1px solid #dddddd;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

.dropdown-menu li a {
  text-decoration: none;
  color: black;
}

/* Pour afficher le menu lorsque isProfileMenuVisible est vrai */
.profile-menu ul[v-show="true"] {
  display: block;
}

.nav-menu .li-center.active {
  text-decoration: underline;
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

.alignementStyle {
  display: flex;
  align-items: center;
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
