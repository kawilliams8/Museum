<template>
  <div class="Artwork">
    <h1 class="title">{{artwork.title}}</h1>
    <h2 class="subhead">{{artwork.department}}</h2>
    <h2 class="subhead">{{artwork.division}}</h2>
    <h2 class="subhead">{{artwork.technique}}</h2>
    <img :src="artwork.images[0].baseimageurl" alt={artwork.title} class="artworkImage"/>
    <h3 class="note">{{artwork.people[0].alphasort}}</h3>
    <h4 class="note">{{artwork.people[0].role}}</h4>
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
    margin: 35px;
    min-height: 450px;
    width: 400px;
  }
  .title {
    text-align: center;
  }
  .subhead {
    font-size: 16px;
    padding: 0 20px;
  }
  .note {
    font-size: 16px;
    padding: 0 20px;
  }
  .artworkImage {
    align-self: center;
    max-height: 180px;
    margin: 10px 10%;
  }
</style>