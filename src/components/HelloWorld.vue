<template>
  <div class="hello">
    <h1>Test my dude</h1>
     <b-button variant=success>Sup</b-button>
    <h1>{{ msg }}</h1>
    <h2 class="text-dark">Test Links</h2>
    <ul>
      <li>
        <router-link to="/map">MapInfo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
