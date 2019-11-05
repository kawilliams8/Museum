<template>
  <div id="gallery">
    <h1>Gallery</h1>
        <div v-for="artObject in artObjects" v-bind:key="artObject.id">
          <Artwork v-bind:artwork="artObject"/>
        </div>
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

<style scoped>
  #gallery {
    height: 90vh;
  }
</style>