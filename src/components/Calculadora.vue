<template>
  <div class="contenedor">
    <div class="calculadora">
      <input class="consola1" v-model="consola" disabled>
      <button v-for="numero in numeros" :key="numero" @click="agregarNumero(numero)">
        {{ numero }}
      </button>
      <button v-for="operacion in operaciones" :key="operacion" @click="agregarOperacion(operacion)">
        {{ operacion }}
      </button>
      <button @click="calcularResultado">=</button>
      <button @click="limpiar">Limpiar</button>
      <p class="resultado">{{ resultado }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      numero: 5,
      tituloComponente: this.titulo,
      consola: "",
      resultado: "Resultado: ",
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operaciones: ["+", "-", "*", "/"],
    };
  },
  computed: {
    resultado() {
      console.log("Metodo computado")
      let total = "";
      try {
        total = new Function(`return ${this.consola}`)();
      } catch (error) {
        total = "Error";
      }
      return "Resultado: " + total;
    },
  },
  props: ["titulo", "valor"],
  methods: {
    sumar() {
      this.numero++;
    },
    restar() {
      this.numero--;
    },
    agregarNumero(numero) {
      this.consola += numero;
    },
    agregarOperacion(operacion) {
      this.consola += operacion;
    },
    calcularResultado() {
      let total = eval(this.consola);
      this.consola = total.toString();
    },
    limpiar() {
      this.consola = "";
      this.resultado = "Resultado: ";
    },
  },
};
</script>

<style>
button {
  background-color: #64b6;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
}

button:hover {
  background-color: #5aa67b;
}
.contenedor{
    display: flex;
    justify-content: center;
    align-items: center;
}
.calculadora{
    display: grid;
    grid-template-columns: repeat(4,75px);
    background-color: pink;
    padding: 20px;
    border-radius: 35px;
    box-shadow: 5px 5px 50px 5px black;
}
.consola1{
    grid-column: span 4;
}
.resultado{
    grid-column: span 4;
}
</style>
