<template>
  <div id="Search">  
    <input v-model="keyword" placeholder="Enter a search term">
    <p>Message is: {{ keyword }}</p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {},
}
</script>

<style scoped>
  #Search {
  }
</style>