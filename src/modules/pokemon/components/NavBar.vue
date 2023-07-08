<template>
  <!--Navegacion tradicional
    Existe un refresco en la pagina
  <div>
    <a href="/">Bienvenida</a>
    <a href="/juego">Juego</a>
    <a href="/premios">Premios</a>
    <a href="/pokemon">Pokemon</a>
  </div>-->
  <!--Navegacion optimizada con vue-->
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/juego">Instrucciones</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/pokemon">Juego Pokemon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
</style>