<template>
  <div class="artwork">
    <h1>{{artwork.title}}</h1>
    <h2>{{artwork.images[0].baseimageurl}}</h2>
    <img :src="artwork.images[0].baseimageurl" alt={artwork.title}/>
  </div>
</template>

<script>
export default {
  name: 'Artwork',
  components: {},
  props: ['artwork']
}
</script>

<style>
  .artwork {
    background-color: grey;
    margin: 10px;
  }
</style>