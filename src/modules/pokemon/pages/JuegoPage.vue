<template>
  <div class="game-description">
    <h1 class="title">Instrucciones</h1>
    <h2 class="subtitle">¿Puedes adivinar qué Pokémon es?</h2>
    <div class="description-container">
      <div class="description-box">
        <p class="description">
          En este emocionante juego, se te presentarán imágenes de diferentes
          Pokémon y deberás utilizar tus habilidades para adivinar cuál es,
          seleccionando el nombre correcto de una lista de opciones.
        </p>
        <p class="description">
          El objetivo del juego es poner a prueba tus conocimientos sobre los
          Pokémon y demostrar que eres un verdadero maestro Pokémon. A medida
          que avances, los Pokémon pueden volverse más difíciles de reconocer,
          ¡así que prepárate para enfrentar nuevos desafíos!
        </p>
      </div>
      <h2 class="section-title">Instrucciones:</h2>
      <ol class="instructions">
        <li>Observa cuidadosamente la imagen del Pokémon que se muestra.</li>
        <li>
          Selecciona el nombre correcto del Pokémon de la lista de opciones.
        </li>
        <li>
          Si te equivocas, perderás una oportunidad. Tienes un total de 3
          oportunidades.
        </li>
        <li>
          Intenta obtener la puntuación más alta adivinando correctamente el
          Pokémon.
        </li>
        <li>
          Si pierdes las 3 oportunidades, podrás reiniciar el juego y comenzar
          de nuevo.
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.game-description {
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

.description-container {
  margin-top: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
}

.section-title {
  font-size: 20px;
  margin-top: 20px;
}

.instructions {
  text-align: left;
  margin-left: 40px;
  font-size: 16px;
  margin-bottom: 20px;
}

.description-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: justify;
  margin-top: 20px;
  color: black;
}
</style>