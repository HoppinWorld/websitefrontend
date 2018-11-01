<template>
  <div>
  	<h1 class="mt-3">Downloading the Game</h1>
    <p>Here you can find the official download links for the HoppinWorld Game</p>
    <a href="https://github.com/HoppinWorld/hoppinworldclient/releases" target="_blank"><b-btn variant="primary">Game Download</b-btn></a>

    <a href="https://hoppinworld.net/wiki/install.html" target="_blank"><b-btn variant="warning">Installation instructions</b-btn></a>

    <h2 class="mt-5">Contribute?</h2>
    <p>Fix a bug, want to add features or just want to experiment? Now you can!</p>
    <a href="https://github.com/HoppinWorld/" target="_blank"><b-btn variant="warning"> <font-awesome-icon icon="Github" />
 Source Code</b-btn></a>
 <!-- <i class="fab fa-github"></i> -->
  </div>
</template>

<script>
export default {
  name: 'download'
}
</script>

<style scoped>
h1, h2 {
  vertical-align: center;
  font-weight: bolder;
  font-size: 3rem;
}
a {
  color: #42b983;
}
</style>
