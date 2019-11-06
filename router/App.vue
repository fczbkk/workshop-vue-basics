<template>
  <div>
    <ul class="navigation">
      <li><router-link :to="{name: 'home'}">Home</router-link></li>
      <li><router-link :to="{name: 'async'}">Async page</router-link></li>
      <li><router-link :to="{name: 'product', params: {product_id: 't-shirt'}}">Product detail</router-link></li>
      <li><router-link to="/non-existing-page">Non-existing page</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .navigation {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  .navigation li {
    padding: 0;
    margin: 0;
    margin-right: 2em;
  }

</style>

<style>
  body {
    font-family: sans-serif;
    line-height: 1.5em;
    padding: 3em;
  }
</style>
