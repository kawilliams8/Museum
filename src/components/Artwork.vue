<template>
  <div class="Artwork">
    <h1>{{artwork.title}}</h1>
    <h2>{{artwork.technique}}</h2>
    <img :src="artwork.images[0].baseimageurl" alt={artwork.title} class="artworkImage"/>
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
  .Artwork {
    background-color: grey;
    margin: 10px;
    height: 350px;
    width: 400px;
  }
  .artworkImage {
    height: 200px;
  }
</style>