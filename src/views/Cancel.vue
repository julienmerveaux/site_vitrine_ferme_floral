<script>
export default {
  name: "Cancel"
}
</script>

<template>
  <div class="cancel-container">
    <h1>Oups, ça ne fonctionne pas</h1>
    <p>Une erreur s'est produite. Veuillez réessayer plus tard.</p>
  </div>
</template>

<style scoped>
.cancel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff1f2;
  border: 1px solid #ffccd5;
  border-radius: 8px;
  color: #d8000c;
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
