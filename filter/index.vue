<template>
  <ul>
    <li>Price: {{ 25.5 | formatPrice }}</li>
    <li>Units: {{ 5 | addStars }}</li>
    <li>Total price: {{ 25.5 * 5 | formatPrice | addStars(1) }}</li>
  </ul>
</template>

<script>
  import {formatPrice, addStars} from './filters'

  export default {
    filters: {
      formatPrice,
      addStars
    }
  }
</script>

<style scoped>

</style>
