<template>
  <div>
    <button @click="quantity -= 1">-</button>
    <input type="text" v-model="quantity">
    <button @click="quantity += 1">-</button>
  </div>
</template>

<script>
  import { SET_QUANTITY } from '../store-properties'

  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    computed: {
      quantity: {
        get () {
          return this.$store.state.itemsInCart[this.productId] || 0
        },
        set (newValue) {
          this.$store.commit(SET_QUANTITY, {
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
