<template>
  <div>
    <div>
      <button @click="detailsDisplayed = true">Show details</button>
      <button @click="detailsDisplayed = false">Hide details</button>
    </div>
    <p v-show="detailsDisplayed">Details about the product.</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detailsDisplayed: false
      }
    }
  }
</script>
