<template>
  <div>
    <p>Items in stock: {{ stock }}</p>
    <p>
      <label>
        Quantity:
        <input type="number" v-model="quantity">
      </label>
    </p>
    <p>You can order {{ available }} more items.</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 10,
        stock: 100
      }
    },

    computed: {
      available () {
        return this.stock - this.quantity
      }
    }
  }
</script>

<style scoped>

</style>
