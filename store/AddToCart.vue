<template>
  <p>
    Product: {{ productId }}<br>
    <button @click="count--">-</button>
    <input type="text" v-model.number="count" size="3">
    <button @click="count++">+</button>
  </p>
</template>

<script>

  import {
    COUNT_PRODUCT_ITEMS,
    SET_CART_ITEM_QUANTITY
  } from './store-properties'

  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    computed: {
      count: {
        get () {
          return this.$store.getters[COUNT_PRODUCT_ITEMS](this.productId)
        },
        set (newValue) {
          this.$store.commit(SET_CART_ITEM_QUANTITY, {
            productId: this.productId,
            quantity: newValue
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
