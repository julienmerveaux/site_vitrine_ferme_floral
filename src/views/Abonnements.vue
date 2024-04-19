<template>
  <div class="container">
    <h1>Mes Abonnements</h1>

    <div class="table-container">
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
          <td>
            <button @click="annulerAbonnement(abonnement.id)">Annuler</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Abonnements",
  computed: {
    ...mapGetters("UsersInformation", ["getHistoriqueAbonnements"]),
  },
  methods: {
    annulerAbonnement(idAbonnement) {
      this.$store.dispatch('UsersInformation/deleteAbo', { idAbonnement });
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto; /* Activer le défilement horizontal si nécessaire */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
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
  background-color: #4CAF50;
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

/* Styles responsives */
@media (max-width: 768px) {
  th, td {
    font-size: 0.9rem; /* Ajuster la taille de la police pour les petits écrans */
    padding: 6px; /* Ajuster le rembourrage pour les petits écrans */
  }

  button {
    font-size: 14px; /* Ajuster la taille de la police des boutons pour les petits écrans */
    padding: 8px 16px; /* Ajuster le rembourrage des boutons pour les petits écrans */
  }
}
</style>
