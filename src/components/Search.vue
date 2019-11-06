<template>
  <div id="Search">  
    <h3>Search: </h3>
    <input v-model:="searchterm" placeholder="Enter a search term" class="input">
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['searchterm']
}
</script>

<style scoped>
  .input {
    height: 30px;
    width: 300px;
  }
</style>