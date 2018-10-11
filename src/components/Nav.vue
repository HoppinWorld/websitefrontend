<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <a class="navbar-brand" href="/">HoppinWorld</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/"><b-button variant=success>Home</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/download"><b-button variant=success>Download</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/map"><b-button variant=success>MapInfo</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/rankings"><b-button variant=success>Rankings</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/wiki"><b-button variant=success>Wiki</b-button></router-link></li>
        <li class="nav-item">
          <b-dropdown id="ddown1" text="Account" class="m-md-2">
            <b-dropdown-item><a href="#">Login</a></b-dropdown-item>
            <b-dropdown-item><a href="#">Register</a></b-dropdown-item>
            <b-dropdown-item><a href="#">Settings</a></b-dropdown-item>
            <b-dropdown-item><a href="#">Logout</a></b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  background-color: #3185FC;
}
</style>
