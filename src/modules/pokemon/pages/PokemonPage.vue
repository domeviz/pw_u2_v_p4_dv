<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <h2>Intentos: {{ intentos }}</h2>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
    <PokemonOps
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
  </div>
  <div v-if="mostrarMensaje">
      <h2 v-if="puntaje>0">Ganaste! Puntaje: {{ puntaje }}</h2>
      <h2 v-else>Perdiste!</h2>
      <button @click="reiniciarJuego">Reiniciar Juego</button>
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
      puntaje:0,
      intentos:0,
      juegoTerminado:false,
      mostrarMensaje:false
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
      if(this.juegoTerminado) return;
      console.log("evento en el padre");
      this.showPokemon = true;
      this.intentos++;
      console.log(idSeleccionado);
      console.log("Intentos")
      console.log(this.intentos)
      if(idSeleccionado==this.pokemonCorrecto.id){
        if(this.intentos===1){
          this.puntaje+=5;
        } else if(this.intentos===2){
          this.puntaje+=2;
        } else if(this.intentos===3){
          this.puntaje+=1;
        }
        console.log("Ganaste");
        console.log("Puntaje: ",this.puntaje);
        this.mostrarMensaje=true;
        this.juegoTerminado=true;
      } else{
        if(this.intentos===3){
          console.log("Perdiste");
          this.mostrarMensaje=true;
          this.juegoTerminado=true;
        }
      }
    },
    reiniciarJuego(){
      this.pokemonCorrecto=null;
      this.showPokemon=false;
      this.puntaje=0;
      this.intentos=0;
      this.juegoTerminado=false;
      this.mostrarMensaje=false;
      this.cargaJuegoInicial();
    }
  },
  mounted() {
    console.log("Se monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
</style>