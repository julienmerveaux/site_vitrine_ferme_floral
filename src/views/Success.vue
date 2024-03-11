<script>
import {mapGetters} from "vuex";

export default {
  name: "Success",
  computed: {
    ...mapGetters("PanierPro", ["getPanierPro"]),
    ...mapGetters("PanierParticulier", ["getPanierparticulier"]),
  },
  async created() {
    // Correctly access mapped getters through `this`
    await Promise.all([
      ...this.getPanierPro.map(article =>
          this.$store.dispatch('PlantesInformation/updateProductQuantity', {
            recordId: article.id,
            quantitySold: article.quantiteAchat,
          })
      ),
      ...this.getPanierparticulier.map(article =>
          this.$store.dispatch('BouquetInformation/updateProductQuantity', {
            recordId: article.id,
            quantitySold: article.quantiteAchat,
          })
      ),
    ]);
  }
}
</script>

<template>
  <div class="success-container">
    <h1>Succès!</h1>
    <p>Votre achat a été complétée avec succès.</p>
  </div>
</template>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #e9f6ec;
  border: 1px solid #b2d8b0;
  border-radius: 8px;
  color: #4F8A10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
  font-family: 'Arial', sans-serif;
}

h1 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

p {
  margin: 0;
  font-size: 16px;
}
</style>
