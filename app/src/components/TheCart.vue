<template>
  <div>
    {{ COUNT_PRODUCTS }} products,
    {{ COUNT_ITEMS }} items
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import { COUNT_ITEMS, COUNT_PRODUCTS } from '../store-properties'

  export default {
    computed: {
      ...mapGetters([
        COUNT_PRODUCTS,
        COUNT_ITEMS
      ])
    }
  }
</script>

<style scoped>

</style>
