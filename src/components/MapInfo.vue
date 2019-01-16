<template>
  <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
    <h1 class="text-light"><span variant=warning>Map: </span><span variant=primary>{{map.name}}</span></h1>

    <br/>
    <!-- <textarea class="nofocus" readonly :value="map.description" rows="8" cols="80"></textarea> -->
    <div v-if="hasPath">
      <a :href="map.path" target="_blank"><b-button variant=success>Download</b-button></a>
    </div>

    <br/>
    <br/>

    <div class="d-flex flex-row justify-content-center container text-light">
      <!-- Diff box component would go here -->
      <!-- diff & playcount row -->
      <div class="mx-2 flex-grid-2">
        <h2>Difficulty</h2>
        <h3>{{map.difficulty}}</h3>
      </div>

      <div class="mx-1 flex-grid-1">
        <h2>Mapper</h2>
        <router-link class="nav-link" :to="userLinkFromId(map.mapper)">{{map.mapper_name}}</router-link>
      </div>

      <div class="mx-2 flex-grid-2">
        <h2>Play Count</h2>
        <h3>{{map.playcount}}</h3>
      </div>
    </div>

    <br/>
    <br/>

    <div class="d-flex flex-row justify-content-center container text-light">

      <!-- Categories and tags -->
      <div class="mx-2 flex-grid-2">
        <h2>Categories</h2>
        <ul class="list-group">
          <li v-for="cat in map.categories" :key="cat"><h5>{{cat}}</h5></li>
        </ul>
      </div>

      <div class="mx-2 flex-grid-2">
        <h2>Tags</h2>
        <ul class="list-group">
          <li v-for="tag in map.tags" :key="tag"><h5>{{tag}}</h5></li>
        </ul>
      </div>
    </div>

    <!-- scores -->
    <h2 class="text-light">Scores</h2>
    <div class="text-light">
      <table>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Time</th>
        </tr>
        <tr v-for="score in scores">
          <td></td>
          <td>{{score.username}}</td>
          <td>{{score.total_time}}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      map: {
        name: 'LOADING',
        difficulty: '',
        description: '',
        categories: [],
        tags: [],
        mapper: 0,
        mapper_name: '',
        playcount: 0,
        path: ''
      },
      scores: [],
      errors: [],
    }
  },
  mounted: function () {
    axios.get("https://hoppinworld.net:27015/map/"+this.$route.params.id)
    .then(response => {
      this.map = response.data
      this.map.difficulty = this.map.difficulty.charAt(0).toUpperCase() + this.map.difficulty.slice(1);
    })
    .catch(e => {
      this.errors.push(e)
    })

    axios.get("https://hoppinworld.net:27015/map/"+this.$route.params.id+"/scores")
    .then(response => {
      this.scores = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    hasPath() {
      return map.path !== '';
    },
    userLinkFromId(id) {
      return "/player/" + id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  vertical-align: center;
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

.half {
  witdh: 50%;
}

.nofocus:focus {
   outline: none;
}

* {
    box-sizing: border-box;
}

.navbar a {
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    text-align: center;
}

.navbar a:hover {
    background-color: #ddd;
    color: black;
}

.flex-grid-2 {
  flex: 1 0 21%;
}


table tr:nth-child(2){
  counter-reset: rowNumber;
}
table tr {
    counter-increment: rowNumber;
}
table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
}

table tr td {
  text-align: left;
}

</style>
