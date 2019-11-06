<template>
  <div id="Search">  
    <input class="input" v-model="keyword" placeholder="Enter a search term">
    <p>Message is: {{ keyword }}</p>
    <input class="input" v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {}
}
</script>

<style scoped>
  .input {
    height: 30px;
    width: 300px;
  }
</style>