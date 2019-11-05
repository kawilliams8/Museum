<template>
  <div id="gallery">
    <h1>Gallery</h1>
      <ul id="artObjectList">
        <li v-for="artObject in artObjects" v-bind:key="artObject.objectid">
          {{artObject.title}}
          {{artObject.dated}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  components: {},
  props: ['artObjects']
}
</script>

<style>
  #gallery {
    height: 90vh;
  }
</style>