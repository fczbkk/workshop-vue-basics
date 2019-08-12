<template>
  <div>
    <p>Select a product</p>
    <ul>
      <li><product-item name="T-shirt" /></li>
      <li><product-item name="Funny hat" /></li>
      <li><product-item name="Big coat" /></li>
    </ul>

    <p>Select a destination</p>
    <ul>
      <li><destination-item name="Praha" /></li>
      <li><destination-item name="Brno" /></li>
      <li><destination-item name="Ostrava" /></li>
    </ul>
  </div>
</template>

<script>
  import ProductItem from './productItem.vue'
  import DestinationItem from './destinationItem.vue'
  export default {
    components: {
      ProductItem,
      DestinationItem
    }
  }
</script>

<style scoped>

</style>
