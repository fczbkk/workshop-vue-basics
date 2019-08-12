<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
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
            description: 'This t-shirt has some funny image printed on it.'
          },
          {
            id: 'elegant-skirt',
            title: 'Elegant skirt',
            description: 'You will look like a supermodel in this skirt.'
          }
        ]
      }
    }
  }
</script>
