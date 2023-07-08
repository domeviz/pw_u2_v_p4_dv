<template>
  <div class="achievements-page">
    <h1 class="title">Premios de reconocimiento</h1>
    <div class="achievements-container">
      <div class="achievement-card">
        <h2>Medalla de Bronce</h2>
        <p>Explorador Pokémon</p>
        <img src="../../../assets/bronce.webp" class="achievement-image" />
      </div>
      <div class="achievement-card">
        <h2>Medalla de Oro</h2>
        <p>Maestro Pokémon</p>
        <img src="../../../assets/oro.webp" class="achievement-image" />
      </div>
      <div class="achievement-card">
        <h2>Medalla de Plata</h2>
        <p>Adivinador Experto</p>
        <img src="../../../assets/plata.webp" class="achievement-image" />
      </div>
    </div>
  </div>
</template>

<style>
.achievements-page {
  text-align: center;
  color: #fff;
  background-color: #f05030;
  padding: 20px;
}

.title {
  font-size: 30px;
  margin-top: 30px;
}

.achievements-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.achievement-card {
  margin: 10px;
  height: 200px;
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.achievement-image {
  width: 100px;
  height: 100px;
}
</style>