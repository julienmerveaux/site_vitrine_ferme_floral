<template>
  <footer class="footer">
    <img src="https://via.placeholder.com/100" alt="Localisation de l'entreprise">
    <div class="footer-details">
      <p><strong>Notre Boutique</strong></p>
      <p>123 Rue de la Fleur, 75008 Paris</p>
      <p>Téléphone: 01 23 45 67 89</p>
      <p>Email: contact@notreboutique.fr</p>
    </div>
    <button class="contact-details">
      <RouterLink class="colorRouter" to="/contact">Contactez-nous</RouterLink>
    </button>
  </footer>
</template>
<script setup>

</script>


<style scoped>
.colorRouter {
  color: black;
}
.contact-details {
  margin-left: 50px;
  width: auto;
  max-height: 250px;
  background-color: transparent;
  border: none;
  color: black;
  text-decoration: underline;
}
.footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa; /* Couleur de fond légère pour le footer */
}

.footer img {
  max-width: 250px; /* Ajustez la taille de l'image selon vos besoins */
  aspect-ratio: 1;
  margin-right: 20px;
}

.footer-details {
  display: flex;
  flex-direction: column;
}

@media (max-width: 600px) {
  .footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .footer img {
    margin-bottom: 20px;
    margin-right: 0;
    max-width: none;
  }
  .contact-details {
    margin-left: 0;
  }
}
</style>