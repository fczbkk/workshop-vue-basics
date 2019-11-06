<template>
  <div>
    🛒 Cart:
    {{ countProducts }}
    ({{ countItems }})
  </div>
</template>

<script>
  import {
    COUNT_ITEMS,
    COUNT_PRODUCTS
  } from './store-properties'

  export default {
    computed: {
      countProducts () {
        return this.$store.getters[COUNT_PRODUCTS]
      },
      countItems () {
        return this.$store.getters[COUNT_ITEMS]
      }
    }
  }
</script>

<style scoped>

</style>
