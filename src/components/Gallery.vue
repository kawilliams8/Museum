<template>
  <div id="gallery">  
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
  props: {artObjects: Array}
}
</script>

<style scoped>
  #gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>