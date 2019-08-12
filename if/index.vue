<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <div v-if="product.isAvailable">
        <button>Buy now!</button>
      </div>
      <div v-else>
        Sorry, this product is sold out.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            id: 't-shirt',
            title: 'Funny t-shirt',
            isAvailable: true
          },
          {
            id: 'skirt',
            title: 'Elegant skirt',
            isAvailable: false
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
