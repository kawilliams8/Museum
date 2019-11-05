<template>
  <div class="Artwork">
    <h1 class="title">{{artwork.title}}</h1>
    <h2 class="technique">{{artwork.technique}}</h2>
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
    display: flex;
    flex-direction: column;
    margin: 10px;
    height: 350px;
    width: 400px;
  }
  .title {
    text-align: center;
  }
  .technique {
    font-size: 18px;
  }
  .artworkImage {
    align-self: center;
    max-height: 150px;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>