<template>
  <div>
    Items in cart:
    {{ countProducts }}
    ({{ countItems }})
  </div>
</template>

<script>
  export default {
    computed: {
      countProducts () {
        return this.$store.getters.countProducts
      },
      countItems () {
        return this.$store.getters.countItems
      }
    }
  }
</script>

<style scoped>

</style>
