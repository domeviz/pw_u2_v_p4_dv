<template>
  <h1>Adivina la Respuesta</h1>
  <img :src="rutaImagen" alt="No se puede presentar" />
  <div class="bg-dark"></div>
  <div class="contenedor">
    <button @click="iniciarJuego" v-if="!juegoIniciado">Iniciar Juego</button>
    <div v-if="juegoIniciado">
      <h2>{{ pregunta }}</h2>
      <button @click="responder('yes')">Si</button>
      <button @click="responder('no')">No</button>
      <div class="puntaje">Puntaje: {{ puntaje }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      rutaImagen:
        "https://play-lh.googleusercontent.com/0mgvhYfhG4Qm7UsE8uW4P2SUBw-ujHOTAgcP8DpXUafktzlUza2MRzLDK02AUK4cYZxT",
      juegoIniciado: false,
      puntaje: 0,
    };
  },
  watch: {
    juegoIniciado(valor) {
      if (valor) {
        this.obtenerPregunta();
      }
    },
  },
  methods: {
    async iniciarJuego() {
      this.juegoIniciado = true;
      this.puntaje = 0;
      await this.obtenerPregunta();
    },
    async obtenerPregunta(respuesta) {
      const { question } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      this.pregunta = question;
    },
    async responder(respuesta) {
      this.respuesta = respuesta;
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      this.rutaImagen = image;
      if (answer === this.respuesta) {
        alert("Respuesta correcta");
        this.puntaje++;
      } else {
        alert("Respuesta incorrecta");
      }
      this.respuesta = "";
      this.obtenerPregunta();
    },
  },
};
</script>

<style>
img,
.bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}
.bg-dark {
  background-color: rgb(0, 0, 0, 0.4);
}
.contenedor {
  position: relative;
}
button{
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  margin: 10px;
  background: pink;
}
p,
h1,
h2 {
  color: white;
}
.puntaje{
  color: white;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;;
}
</style>