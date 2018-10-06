<template>
  <div id="bg">
    <router-link to="/"><b-button variant=success>Home</b-button></router-link>
    <router-link to="/download"><b-button variant=success>Download</b-button></router-link>
    <router-link to="/map"><b-button variant=success>MapInfo</b-button></router-link>
    <router-link to="/rankings"><b-button variant=success>Rankings</b-button></router-link>
    <router-link to="/wiki"><b-button variant=success>Wiki</b-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg {
  width: 100%;
  background-color: #CC00AA;
}
</style>
