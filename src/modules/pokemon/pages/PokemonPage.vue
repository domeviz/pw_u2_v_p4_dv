<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
    <PokemonOps
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
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
    };
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
      console.log("Pokemon Correcto")
      console.log(this.pokemonCorrecto)
      console.log("Indice")
      console.log(indicePokemon)
    },
    revisarSeleccion(idSeleccionado) {
      console.log("evento en el padre");
      this.showPokemon = true;
      console.log(idSeleccionado);
      if(idSeleccionado==this.pokemonCorrecto.id){
        console.log("ganaste")
      } else{
        console.log("perdiste")
      }
    },
  },
  mounted() {
    console.log("Se monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
</style>