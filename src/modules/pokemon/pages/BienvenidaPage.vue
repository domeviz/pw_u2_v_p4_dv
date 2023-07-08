<template>
  <div class="welcome-page">
    <h1 class="title">Bienvenido al desafío Pokémon</h1>
    <h2 class="subtitle">¡Adivina el Nombre Correcto!</h2>
    <div class="pokemon-image-container">
      <img
        src="../../../assets/pokemon.png"
        class="pokemon-image"
        alt="Imagen de Pokémon"
      />
    </div>
    <div class="description-box">
      <p class="description">
        Prepárate para poner a prueba tus conocimientos sobre los increíbles y
        adorables Pokémon. En este juego, se te presentarán imágenes de
        diferentes Pokémon y tu tarea será identificar y seleccionar el nombre
        correcto de cada uno.
      </p>
      <p class="description">
        ¡Que comience la aventura y que los Pokémon te guíen hacia la victoria
        en este juego de adivinanzas!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.welcome-page {
  text-align: center;
  color: #fff;
  background-color: #f05030;
  padding: 20px;
}

.title {
  font-size: 30px;
  margin-top: 30px;
}

.subtitle {
  font-size: 24px;
  margin-top: 10px;
}

.pokemon-image-container {
  margin: 30px auto;
  max-width: 300px;
}

.pokemon-image {
  display: block;
  max-width: 100%;
  height: auto;
}

.description-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: justify;
  margin-top: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
  color: black;
}
</style>