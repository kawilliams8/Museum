<template>
  <div id="app">
    <Header />
    <Search v-on:update-search="updateSearch(term)"/>
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
  props: ['term'],
  data () {
    return {
      artObjects: null,
      key: process.env.VUE_APP_KEY
    }
  },
  mounted (keyword = 'William Henry Jackson') {
    axios
      .get(`https://api.harvardartmuseums.org/object?size=30&keyword=${keyword}&apikey=${process.env.VUE_APP_KEY}`)
      .then(data => (this.artObjects = data.data.records))
  },
  methods: {
    updateSearch(term = 'cat') {
      axios
      .get(`https://api.harvardartmuseums.org/object?size=30&keyword=${term}&apikey=${process.env.VUE_APP_KEY}`)
      .then(data => (this.artObjects = data.data.records))
    }
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
  font-family: 'Libre Baskerville', serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
