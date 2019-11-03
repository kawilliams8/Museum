<template>
  <div id="app">
    <h1> Header </h1>
  </div>
</template>

<script>
import key from '../components/apiKey';
const axios = require('axios');

export default {
  name: 'Header',
  components: {},
  data () {
    return {
      artObjects: null
    }
  },
  mounted (keyword = 'horse') {
    axios
      .get(`https://api.harvardartmuseums.org/object?size=50&keyword=${keyword}&apikey=${key.apiKey}`)
      .then(response => response)
      .then(data => (this.artObjects = data.data.records))
  }
}
</script>

<style>
</style>