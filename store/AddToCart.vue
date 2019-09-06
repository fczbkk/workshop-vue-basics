<template>
  <div>
    {{ productId }}:
    <button @click="count--">-</button>
    <input type="text" v-model.number="count">
    <button @click="count++">+</button>
  </div>
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
          return this.$store.state.itemsInCart[this.productId] || 0
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
