<template>
  <div id="app">
    <the-cart />
    <add-to-cart product-id="first" />
    <add-to-cart product-id="second" />
    <add-to-cart product-id="third" />
  </div>
</template>

<script>

import TheCart from './TheCart.vue'
import AddToCart from './AddToCart.vue'

export default {
  name: 'app',
  components: {
    TheCart,
    AddToCart
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    line-height: 1.5em;
    padding: 3em;
  }
</style>
