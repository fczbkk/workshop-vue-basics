<template>
  <div>
    <h1>{{ productData.title }}</h1>
    <p>{{ productData.description }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        productData: {}
      }
    },
    beforeRouteEnter (to, from, next) {
      fetch(`http://localhost:3000/products/${to.params.product_id}`)
        .then((response) => response.json())
        .then((data) => next((vm) => vm.productData = data))
    }
  }
</script>

<style scoped>

</style>
