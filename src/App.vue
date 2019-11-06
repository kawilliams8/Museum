<template>
  <div id="app">
    <Header />
    <Search />
    <Gallery v-bind:artObjects="this.artObjects"/>
  </div>
</template>

<script>
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import Search from '../src/components/Search';
const axios = require('axios');

export default {
  name: 'app',
  components: {
    Header,
    Gallery,
    Search
  },
  data () {
    return {
      artObjects: null,
      key: process.env.VUE_APP_KEY
    }
  },
  mounted (keyword = 'dog') {
    axios
      .get(`https://api.harvardartmuseums.org/object?size=12&keyword=${keyword}&apikey=${process.env.VUE_APP_KEY}`)
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
  background-color: #f6f6f6;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
