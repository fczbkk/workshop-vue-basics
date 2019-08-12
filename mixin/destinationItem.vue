<template>
  <div>
    Destination: {{ name }}
  </div>
</template>

<script>
  import highlightableComponent from './highlightableComponent.js'
  export default {
    mixins: [
      highlightableComponent
    ],
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
