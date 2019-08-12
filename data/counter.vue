<template>
  <div>
    <p>
      Quantity:
      {{ quantity }}
    </p>
    <p>
      <button @click="quantity += 1">Add item</button>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 0
      }
    }
  }
</script>
