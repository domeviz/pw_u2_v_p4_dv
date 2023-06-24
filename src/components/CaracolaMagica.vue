<template>
  <h1>Caracola Mágica</h1>
  <img :src="rutaImagen" alt="No se puede presentar" />
  <div class="bg-dark"></div>
  <div class="contenedor">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un ? la pregunta</p>
    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
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
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.respuesta="Espere porfavor"
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      console.log(answer);
      console.log(image);
      this.respuesta = answer;
      this.rutaImagen = image;
      this.pregunta=""
    },
  },
};
</script>

<style>

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
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
p,h1,h2{
    color: white;
}
p{
    font-size: 20px;
    margin-top: 0px;
}
</style>