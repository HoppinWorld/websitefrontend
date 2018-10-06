<template>
  <div>
    <h1>Map Info</h1>
    <h3>{{map.name}}</h3>
    <div id="description">
      <p>{{map.description}}</p>
    </div>
    <div>
      <a href="https://vuejs.org" target="_blank">Download</a>
    </div>
    <div id="mapdata">
      <!-- Diff box component would go here -->
      <!-- diff & playcount row -->
      <div>
        <div class="half">
          <p>Difficulty: {{map.difficulty}}</p>
        </div>
        <div class="half">
          <p>Play Count: {{map.playcount}}</p>
        </div>
      </div>
      <!-- Categories and mapper -->
      <div>
        <div class="half">
          <h4>Categories</h4>
          <div v-for="cat in map.categories" :key="cat">
            <p>{{cat}}</p>
          </div>
        </div>
        <div class="half">
          <p>Mapper: {{map.mapper}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
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

#half {
  witdh: 50%;
}
</style>
