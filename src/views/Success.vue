<script>
export default {
  name: "Success"
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
