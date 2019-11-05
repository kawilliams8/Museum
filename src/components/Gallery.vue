<template>
  <div id="gallery">
    <h1>Gallery</h1>
      <ul id="artObjectList">
        <li v-for="artObject in artObjects" v-bind:key="artObject.objectid">
          {{artObject.title}}
          {{artObject.dated}}
          <Artwork />
        </li>
      </ul>
  </div>
</template>

<script>
import Artwork from '@/components/Artwork.vue';
export default {
  name: 'Gallery',
  components: {Artwork},
  props: ['artObjects']
}
</script>

<style>
  #gallery {
    height: 90vh;
  }
</style>