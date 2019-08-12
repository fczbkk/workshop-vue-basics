<template>
  <div>
    <h1>Monolith</h1>
    <p>Mysterious artifact from Africa. When monkeys are exposed to its presence, causes them to bang bones and ascend to sapience.</p>

    <div>
      <button @click="setCurrentView('detail')">Details</button>
      <button @click="setCurrentView('review')">Reviews</button>
    </div>

    <component :is="currentView" />
  </div>
</template>

<script>
  import ProductDetail from './productDetail.vue'
  import ProductReviews from './productReviews.vue'

  export default {
    data () {
      return {
        currentView: ProductDetail
      }
    },

    methods: {
      setCurrentView (viewId) {
        if (viewId === 'detail') {
          this.currentView = ProductDetail
        } else if (viewId === 'review') {
          this.currentView = ProductReviews
        } else {
          this.currentView = ProductDetail
        }
      }
    }
  }
</script>

<style scoped>

</style>
