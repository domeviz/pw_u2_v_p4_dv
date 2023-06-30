<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="36" :muestraPokemon="true" />
  <h2>Opciones Pokemon</h2>
  <PokemonOps :opciones="arreglo" />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      arreglo: [],
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.arreglo = arregloPokemons;
      console.log(arregloPokemons);
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