<template>
  <div id="app">
    <Header />
    <Gallery v-bind:artObjects="this.artObjects"/>
  </div>
</template>

<script>
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import key from '../src/components/apiKey';
const axios = require('axios');

export default {
  name: 'app',
  components: {
    Header,
    Gallery
  },
  data () {
    return {
      artObjects: null
    }
  },
  mounted (keyword = 'horse') {
    axios
      .get(`https://api.harvardartmuseums.org/object?size=2&keyword=${keyword}&apikey=${key.apiKey}`)
      .then(data => (this.artObjects = data.data.records))
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
