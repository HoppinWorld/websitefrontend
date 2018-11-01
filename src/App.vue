<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="body-container"><router-view/></div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media only screen and (min-width: 575px) {
  #body-container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
