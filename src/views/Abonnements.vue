<template>
  <div class="container">
    <h1>Mes Abonnements</h1>
    <div class="messageAnnulation">
      <h1 v-if="showMessage">Veuillez actualiser votre page</h1>
    </div>
<!--    <div v-if="showDetail" class="detail-overlay">-->
<!--      <p>{{getHistoriqueAbonnements[0].name}}</p>-->
<!--      <div class="detail-content">-->
<!--        <h2>Détails de l'abonnement</h2>-->
<!--        <p><strong>Nom:</strong> {{ selectedAbonnement.nom }}</p>-->
<!--        <p><strong>Date d'achat:</strong> {{ selectedAbonnement.dataAchat }}</p>-->
<!--        <p><strong>Adresse de livraison:</strong> {{ selectedAbonnement.livraison }}</p>-->
<!--        <p><strong>Nombre de produits achetés:</strong> {{ selectedAbonnement.nb_produits_achetes }}</p>-->
<!--        <p><strong>Prix total:</strong> {{ selectedAbonnement.prixTotal }} €</p>-->
<!--        <button @click="closeDetails">Fermer</button>-->
<!--      </div>-->
<!--    </div>-->
    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>Date achat</th>
          <th>Adresse livraison</th>
          <th>Nom du produit achété</th>
          <th>Prix total</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="abonnement in getHistoriqueAbonnements" :key="abonnement.id">
          <td>{{ abonnement.dataAchat }}</td>
          <td>{{ abonnement.livraison }}</td>
          <td>{{ abonnement.name }}</td>
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
  data() {
    return {
      showDetail: false,
      showMessage: false,
      selectedAbonnement: {},
    };
  },
  methods: {
    annulerAbonnement(idAbonnement) {
      this.showMessage = !this.showMessage;
      this.$store.dispatch('UsersInformation/deleteAbo', { idAbonnement });
    },
  },
};
</script>


<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.messageAnnulation {
  width: 100%;
  color: #f15656;
  text-align: center;
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

.detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.detail-content p {
  margin: 10px 0;
}

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
