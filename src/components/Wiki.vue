<template>
  <div>
    <h1>Wiki</h1>
    <div w3-include-html="../../hoppinworldbook/book/index.html"></div>
  </div>
</template>

<script src="http://www.w3schools.com/lib/w3data.js"></script>
<script>

export default {
  name: 'wiki'
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
</style>
