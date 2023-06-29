<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="36" :muestraPokemon="true"/>
  <h2>Opciones Pokemon</h2>
  <PokemonOps />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
};
</script>

<style>
</style>