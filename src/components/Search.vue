<template>
  <div id="Search">  
    <h3>Search: </h3>
    <input v-model:="searchterm" placeholder="Enter a search keyword" class="input">
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['searchterm']
}
</script>

<style scoped>
  #Search {
    display: flex;
    margin: 10px 33%;
  }
  h3 {
    font-size: 28px;
    margin-right: 10px;
  }
  .input {
    font-size: 18px;
    height: 40px;
    padding-left: 5px;
    width: 375px;
  }
</style>