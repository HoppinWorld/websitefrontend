<template>
  <div>
  	<h1 class="mt-3">Downloading the Game</h1>
    <p>Here you can find the official download links for the HoppinWorld Game</p>
    <a href="https://github.com/HoppinWorld/hoppinworldclient/releases" target="_blank"><b-btn variant="primary">Game Download</b-btn></a>

    <a href="https://hoppinworld.net/wiki/install.html" target="_blank"><b-btn variant="warning">Installation instructions</b-btn></a>

    <h2 class="mt-5">How to Play</h2>
    <my-video :sources="video.sources" :options="video.options"></my-video>

    <h2 class="mt-5">Contribute?</h2>
    <p>Fix a bug, want to add features or just want to experiment? Now you can!</p>
    <a href="https://github.com/HoppinWorld/" target="_blank">
      <b-btn variant="warning"> <font-awesome-icon icon="Github" />Source Code</b-btn>
    </a>
    <!-- <i class="fab fa-github"></i> -->
  </div>
</template>

<script>
import myVideo from 'vue-video'
export default {
  name: 'download',
  data () {
    return {
        video: {
            sources: [{
                src: '/static/assets/video/bhoptutorial.mp4',
                type: 'video/mp4'
            }],
            options: {
                autoplay: false,
                volume: 0.8,
                poster: '/static/assets/video/bhoptutorial.jpg'
            }
        }
    }
  },
  components: {
      myVideo
  }
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
