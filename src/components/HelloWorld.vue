<template>
  <div class="hello">
    <h1>Hoppin World</h1>

    <div class="banner-container">
      <div class="banner-text text-light">
        <h2>A Game Where you Hop Around</h2>
        <h5>Go as Fast as You Want!</h5>
      </div>
      <img class="banner-img" src="/static/assets/images/gameplay2.png" alt="Gameplay Image 2"/>
    </div>

    <div class="banner-container">
        <h2>Global Leaderboards</h2>
        <h5>Try to be the fastest on each map, collect World Records!</h5>
      <!--<img src="/static/assets/images/number1.png" alt="Number 1 Image" width="64" height="64""/> -->
    </div>

    <div class="banner-container">
      <h2 class="banner-text text-light">Bunny Hop at Its Finest</h2>
      <img class="banner-img" src="/static/assets/images/gameplay1.png" alt="Gameplay Image 1"/>
    </div>

    <div class="banner-container">
        <h2>Anti Progress-Losing Checkpoint System</h2>
        <h5>You won't lose progress by falling behind a checkpoint!</h5>
    </div>

    <div class="banner-container">
      <div class="banner-text text-light">
        <h2>Community Maps</h2>
        <h5>Anyone can make maps, even you!</h5>
      </div>
      <img class="banner-img" src="/static/assets/images/blender.png" alt="Level Editor Image"/>
    </div>

    <div class="banner-container">
        <h2 class="text-dark">High Skill Ceiling</h2>
        <h5 class="text-dark">Extra features like jump timing give you an edge against others if you can master it!</h5>
    </div>

    <div class="banner-container">
      <div class="banner-text text-dark">
        <h2 style="font-weight: bold;">MLG MODE</h2>
        <h5 style="font-weight: bold;">Coming soon</h5>
      </div>
      <img class="banner-img" src="/static/assets/images/rainbowfrog.png" alt="Code Editor"/>
    </div>

    <div class="banner-container">
      <div class="text-dark">
        <h2>Open Source</h2>
        <h5>Fix a bug, want to add features or just want to experiment? Now you can!</h5>
      </div>
      <img class="banner-img" src="/static/assets/images/code.png" alt="Code Editor"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 4em;
}
h2 {
  font-size: 3em;
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
