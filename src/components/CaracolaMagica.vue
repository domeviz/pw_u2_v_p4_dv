<template>
  <h1>Caracola Mágica</h1>
  <img src="https://play-lh.googleusercontent.com/0mgvhYfhG4Qm7UsE8uW4P2SUBw-ujHOTAgcP8DpXUafktzlUza2MRzLDK02AUK4cYZxT" alt="No se puede presentar">
  <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
  <p>Recuerda terminar con un enter la pregunta</p>
<div>
    <h2>Voy a pasar el año?</h2>
    <h1>SI, NO</h1>
</div>
</template>

<script>
export default {
    data(){
        return{
            pregunta: 'Hola Mundo'
        }
    }
}
</script>

<style>

</style>