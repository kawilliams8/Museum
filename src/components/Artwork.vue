<template>
  <div class="Artwork">
    <h1 class="title">{{artwork.title}}</h1>
    <h2 class="subhead">{{artwork.department}}</h2>
    <h2 class="subhead">{{artwork.division}}</h2>
    <img :src="artwork.images[0].baseimageurl" alt={artwork.title} class="artworkImage"/>
    <div class="note-container">
      <h3 class="note">{{artwork.people[0].alphasort}}</h3>
      <h4 class="note">{{artwork.dated}}</h4>
      <h2 class="note">{{artwork.technique}}</h2>
    </div>
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
    background-color: white;
    border: 5px solid #323232;
    display: flex;
    flex-direction: column;
    margin: 35px;
    min-height: 475px;
    width: 400px;
  }
  .title {
    font-size: 26px;
    text-align: center;
  }
  .subhead {
    font-size: 16px;
    padding: 0 20px;
  }
  .note-container {
    margin-top: 80px;
  }
  .note {
    font-style: italic;
    font-size: 12px;
    padding: 2px 20px;
  }
  .artworkImage {
    align-self: center;
    max-width: 300px;
    height: 180px;
    margin: 10px 10%;
  }
</style>