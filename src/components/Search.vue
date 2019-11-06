<template>
  <form id="Search" @submit="searchTerm">  
    <input v-model="term" name="term" type="text" placeholder="Enter a search keyword">
    <button :disabled="!term">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: ['searchterm'],
  data() {
    return {
      usersearchterm: ""
    };
  },
  methods: {
    searchTerm(e) {
      e.preventDefault();
      this.$emit("update-search", this.usersearchterm);
      this.usersearchterm = "";
    }
  }
}
</script>

<style scoped>
  #Search {
    display: flex;
    margin: 10px 33%;
    width: 500px;
  }
  input {
    font-size: 18px;
    height: 40px;
    padding-left: 5px;
    width: 350px;
  }
  button {
    font-size: 18px;
    margin-left: 10px;
    width: 125px;
  }
</style>