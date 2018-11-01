<template>
  <div>
    <h1>Map Listing</h1>
    <div v-for="err in errors">
      <h3 variant=error>{{err}}</h3>
    </div>
    <div v-for="map in maps">
      <h3 style="display: inline-block; vertical-align: middle;">{{map.name}}</h3>
      <router-link class="nav-link map-button" :to="mapLinkFromId(map.id)"><b-button variant=success>Info</b-button></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'maplist',
  data() {
    return {
      maps: [],
      errors: []
    }
  },
  mounted: function () {
    axios.get("https://hoppinworld.net:27015/map")
    .then(response => {
      this.maps = response.data
      this.errors = []
    })
    .catch(e => {
      this.maps = []
      this.errors.push(e)
    })
  },
  methods: {
    mapLinkFromId(id) {
      return "/map/" + id;
    }
  }
}
</script>

<style scoped>
h1, h2 {
  vertical-align: center;
  font-weight: normal;
}
a {
  color: #42b983;
}
.map-button {
  display: inline-block;
}
</style>
