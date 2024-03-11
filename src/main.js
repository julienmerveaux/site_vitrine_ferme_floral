import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/stores/index.js"; // Assurez-vous que c'est bien le chemin vers votre store Vuex

const app = createApp(App)

app.use(store) // Utilisez Vuex
app.use(router) // Utilisez Vue Router

app.mount('#app')

// Assurez-vous que 'UsersInformation/initAuthState' est une action valide dans votre store Vuex
store.dispatch('UsersInformation/initAuthState');
