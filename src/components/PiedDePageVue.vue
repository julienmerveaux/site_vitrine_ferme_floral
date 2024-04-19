<template>
  <footer class="footer">
    <div class="footer-details">
      <p><strong> Ferme Florale Les 5 Saisons</strong></p>
      <p>1501 Route de Mussy, 42810 Rozier en Donzy</p>
      <p>Téléphone : 07 83 93 45 86</p>
      <p>Email: audrey@les-5-saisons.fr</p>
    </div>
    <iframe
        class="iframeLoca"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.9234873642185!2d4.278601076722735!3d45.812790710112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f441f7c652d207%3A0x5dac752fb5cc0a1b!2s1501%20Rte%20de%20Mussy%2C%2042810%20Rozier-en-Donzy!5e0!3m2!1sfr!2sfr!4v1706620639768!5m2!1sfr!2sfr"
        width="600" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <div class="newsletter-container">
      <iframe class="airtable-embed" src="https://airtable.com/embed/appbmkbokhHog6r1K/pagkC2PfmEF5ZSwlO/form" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

.iframeLoca {
  border: 0;
  width: 100%;
  aspect-ratio: 1;
}
.newsletter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; /* Couleur de fond douce */
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  padding: 20px;
}

.newsletter-container h2 {
  margin-bottom: 0.5rem;
  font-family: 'Belleza', sans-serif; /* Ou toute autre police élégante */
  color: #333;
}

.newsletter-container p {
  color: #666;
  margin-bottom: 1.5rem;
}

.newsletter-form input[type="email"] {
  padding: 0.75rem;
  border: none;
  border-radius: 20px;
  min-width: 220px;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: #5c6ac4; /* Couleur du bouton */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #4e58b9; /* Couleur au survol */
}

.footer {
  display: grid;
  justify-content: center;
  padding: 20px 0;
  background-color: var(--couleur-header-footer) !important;
  grid-template-columns: repeat(3, 1fr);
}

.footer img {
  width: 250px; /* Ajustez la taille de l'image selon vos besoins */
  aspect-ratio: 1;
  margin-right: 20px;
}

.footer-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

@media (max-width: 800px) {
  .footer {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
  }

  .footer img {
    margin-bottom: 20px;
    margin-right: 0;
    max-width: none;
  }
  .footer-details {
    margin-right: 0;
  }

  .newsletter-container {
    height: 100%;
    margin-bottom: 0;
  }
}

</style>
