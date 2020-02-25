<template>
  <p>
    Product: {{ productId }}<br>
    <button @click="count--">-</button>
    <input type="text" v-model.number="count" size="3">
    <button @click="count++">+</button>
  </p>
</template>

<script>
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
          return this.$store.getters.countProductItems(this.productId)
        },
        set (newValue) {
          this.$store.commit('setCartItemQuantity', {
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
