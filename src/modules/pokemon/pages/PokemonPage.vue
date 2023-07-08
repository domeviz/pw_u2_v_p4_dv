<template>
  <div class="game-container">
    <div v-if="!pokemonCorrecto" class="loading-container">
      <h1>Espere por favor...</h1>
    </div>
    <div v-else>
      <h1 class="game-title">Juego Pokémon</h1>
      <h2 class="attempts">Intentos: {{ intentos }}</h2>
      <PokemonImg
        :pokemonId="pokemonCorrecto.id"
        :muestraPokemon="showPokemon"
      />
      <PokemonOps
        :opciones="pokemonArr"
        @seleccionado="revisarSeleccion($event)"
      />
    </div>
    <div v-if="mostrarMensaje" class="message-container">
      <h2 v-if="puntaje > 0" class="win-message">
        ¡Ganaste! Puntaje: {{ puntaje }}
      </h2>
      <h2 v-else class="lose-message">¡Perdiste!</h2>
      <button @click="reiniciarJuego" class="restart-button">
        Reiniciar Juego
      </button>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,
      puntaje: 0,
      intentos: 0,
      juegoTerminado: false,
      mostrarMensaje: false,
    };
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.pokemonArr = arregloPokemons;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
    },
    revisarSeleccion(idSeleccionado) {
      if (this.juegoTerminado) return;
      this.showPokemon = true;
      this.intentos++;
      if (idSeleccionado === this.pokemonCorrecto.id) {
        if (this.intentos === 1) {
          this.puntaje += 5;
        } else if (this.intentos === 2) {
          this.puntaje += 2;
        } else if (this.intentos === 3) {
          this.puntaje += 1;
        }
        this.mostrarMensaje = true;
        this.juegoTerminado = true;
      } else {
        if (this.intentos === 3) {
          this.mostrarMensaje = true;
          this.juegoTerminado = true;
        }
      }
    },
    reiniciarJuego() {
      this.pokemonCorrecto = null;
      this.showPokemon = false;
      this.puntaje = 0;
      this.intentos = 0;
      this.juegoTerminado = false;
      this.mostrarMensaje = false;
      this.cargaJuegoInicial();
    },
  },
  mounted() {
    this.cargaJuegoInicial();
  },
};
</script>

<style>
.game-container {
  text-align: center;
  color: #fff;
  background-color: #f05030;
  padding: 20px;
}

.loading-container {
  margin-top: 100px;
}

.game-title {
  font-size: 30px;
  margin-bottom: 20px;
}

.attempts {
  font-size: 20px;
  margin-bottom: 20px;
}

.message-container {
  margin-top: 30px;
}

.win-message {
  font-size: 24px;
  color: #27ae60;
}

.lose-message {
  font-size: 24px;
  color: #692bc0;
  margin-bottom: 20px;
}

.restart-button {
  background-color: #fff;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.restart-button:hover {
  background-color: rgb(46, 46, 210);
  color: #fff;
}
</style>