<template>
  <div>
    <p>Quantity: {{ quantity }}</p>
    <p>
      <button @click="addQuantity">more</button>
      <button @click="removeQuantity">less</button>
      <button @click="adjustQuantity(10)">add 10</button>
      <button @click="adjustQuantity(100)">add 100</button>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 0
      }
    },

    methods: {
      addQuantity () {
        this.quantity += 1
      },
      removeQuantity () {
        this.quantity -= 1
      },
      adjustQuantity (delta) {
        this.quantity += delta
      }
    }
  }
</script>
