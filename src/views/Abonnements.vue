<template>
  <div class="container">
    <h1>Mes Abonnements</h1>

    <table>
      <thead>
      <tr>
        <th>Date achat</th>
        <th>Adresse livraison</th>
        <th>Nombre de produit achetés</th>
        <th>Prix total</th>
        <th>Détails</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="abonnement in getHistoriqueAbonnements" :key="abonnement.id">
        <td>{{ abonnement.dataAchat }}</td>
        <td>{{ abonnement.livraison }}</td>
        <td>{{ abonnement.nb_produits_achetes }}</td>
        <td>{{ abonnement.prixTotal }} €</td>
        <td>{{ abonnement.id }} €</td>
        <td>
          <button @click="annulerAbonnement(abonnement.id)">Annuler</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Abonnements",
  computed: {
    ...mapGetters("UsersInformation", ["getHistoriqueAbonnements", "getCurrentUser"]),
  },
  methods: {
    annulerAbonnement(idAbonnement) {
      const info = {
        idAbonnement:idAbonnement,
        userId:this.getCurrentUser.userId
      }
      this.$store.dispatch('UsersInformation/deleteAbo', info);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>

