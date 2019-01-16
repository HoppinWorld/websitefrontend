<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">
      <img class="d-inline-block align-top" alt="HoppinWorld" src="/static/assets/images/hoppinworldlogosmall.png" width="48" height="48" />
    </a>

    <a href="/" class="text-dark mr-3" style="position: relative; padding: 0px 80px;">
      <h3 class="banner-text">HoppinWorld</h3>
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><router-link class="nav-link" to="/"><b-button variant=warning>Home</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/download"><b-button variant=warning>Download</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/map"><b-button variant=warning>Maps</b-button></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/rankings"><b-button variant=warning>Rankings</b-button></router-link></li>
        <li class="nav-item"><a class="nav-link" href="/wiki/index.html" target="_blank"><b-button variant=warning>Wiki</b-button></a></li>
      </ul>

      <div class="navbar-nav">
          <b-dropdown variant="warning" right text="Account" class="dropdown">
            <!-- <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">

            </button> -->

            <!-- <div class="dropdown-menu dropdown-menu-right"> -->
              <b-dropdown-item v-if="!logged()">
                <router-link class="nav-link text-primary text-center" to="/login">
                    Login
                </router-link>
              </b-dropdown-item>

              <b-dropdown-item v-if="!logged()">
                <router-link class="nav-link text-primary text-center" to="/register">
                  <!-- <b-button block variant=warning> -->
                    Register
                  <!-- </b-button> -->
                </router-link>
              </b-dropdown-item>

              <b-dropdown-item v-if="logged()">
                <router-link class="nav-link text-primary text-center" to="/profile">
                  Profile
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item v-if="logged()">
              <router-link class="nav-link text-primary text-center" to="/settings">
                  Settings
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item v-if="logged()">
              <router-link class="nav-link text-primary text-center" to="/logout">
                  Logout
                </router-link>
              </b-dropdown-item>
            <!-- </div> -->
          </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import {globalStore} from '../main.js'

export default {
  name: 'nav-bar',
  methods: {
    logged () {
      return globalStore.auth_token != ''
    }
  }
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
