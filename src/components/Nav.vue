<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <a class="navbar-brand" href="/">
      <img class="d-inline-block align-top" alt="HoppinWorld" src="../assets/images/HoppinWorldPattern3BigTransparent2.png" width="48" height="48" />
      <h3 class="text-dark float-right align-self-center mr-3">HoppinWorld</h3>
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><router-link class="nav-link" to="/"><b-button variant=warning>Home</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/download"><b-button variant=warning>Download</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/map"><b-button variant=warning>MapInfo</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/rankings"><b-button variant=warning>Rankings</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/wiki"><b-button variant=warning>Wiki</b-button></router-link></li>
      </ul>
      <ul class="navbar-nav float-right">
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

<style scoped>
nav {
  width: 100%;
}
#collapsibleNavbar {
  width: 80%;
}
</style>
