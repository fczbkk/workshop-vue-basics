<template>
  <div>
    <p>
      Cart:
      <the-cart />
    </p>
    <p>
      T-shirt<br>
      <add-to-cart product-id="tshirt" />
    </p>
    <p>
      T-shirt<br>
      <add-to-cart product-id="tshirt" />
    </p>
    <p>
      Hat<br>
      <add-to-cart product-id="hat" />
    </p>
    <p>
      Swimsuit<br>
      <add-to-cart product-id="swimsuit" />
    </p>
  </div>
</template>

<script>
  import AddToCart from '../components/AddToCart.vue'
  import TheCart from '../components/TheCart'

  export default {
    components: {TheCart, AddToCart}
  }
</script>

<style scoped>

</style>
