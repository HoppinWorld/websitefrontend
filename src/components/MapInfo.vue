<template>
  <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
    <h1>Map Info</h1>
    <h3>{{map.name}}</h3>
    <textarea class="nofocus" readonly :value="map.description" rows="8" cols="80"></textarea>
    <div>
      <a href="https://vuejs.org" target="_blank">Download</a>
    </div>
    <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
      <!-- Diff box component would go here -->
      <!-- diff & playcount row -->
      <div class="mx-2 flex-grid-2">
        <h4>Difficulty: {{map.difficulty}}</h4>
      </div>
      <div class="mx-2 flex-grid-2">
        <h4>Play Count: {{map.playcount}}</h4>
      </div>
      <!-- Categories and mapper -->
      <div class="mx-2 flex-grid-2">
        <h4>Categories</h4>
        <div v-for="cat in map.categories" :key="cat">
          <p>{{cat}}</p>
        </div>
      </div>
      <div class="mx-2 flex-grid-2">
        <h4>Mapper: {{map.mapper}}</h4>
        <b-button variant=success v-on:click="register()">Register</b-button>
        <b-button variant=success v-on:click="pass()">Set Pass</b-button>
        <b-button variant=success v-on:click="login()">Login</b-button>
        <p>Data: {{ remote }}</p>
        <p>Errors: {{ errors }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      map: {
        name: 'Lines',
        difficulty: 'Medium',
        description: 'This is a multiline description.\nThis is the second line',
        categories: [
          'Speed'
        ],
        mapper: 'Jojolepro',
        playcount: 15
      },
      remote: [],
      errors: [],
      resetToken: '57360c70-cfd2-4356-8163-46b6fd6a2705'
    }
  },
  methods: {
    //mounted () {
    register: function() {
      axios.post('http://127.0.0.1:27015/register',
        {
          username: 'test',
          email: 'test@test.com'
        }
      ).then(response => {
        this.remote = response.data
        this.errors = []
      })
        .catch(e => {
          this.remote = []
          this.errors.push(e)
        })
    },
    pass: function() {
      axios.post('http://127.0.0.1:27015/changepassword',
        {
          token: this.resetToken,
          password: 'bob123'
        }
      ).then(response => {
        this.remote = response.data
        this.errors = []
      })
        .catch(e => {
          this.remote = []
          this.errors.push(e)
        })
    },
    login: function() {
      axios.post('http://127.0.0.1:27015/login',
        {
          email: 'test@test.com',
          password: 'bob123'
        }
      ).then(response => {
        this.remote = response.data
        this.errors = []
      })
        .catch(e => {
          this.remote = []
          this.errors.push(e)
          //errors foreach .response.{status,statusText}
        })
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

</style>
