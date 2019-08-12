<template>
  <div>
    <progress-indicator :value="progressValue" ref="progress" />
    <div>
      <button @click="progressValue = 10">10</button>
      <button @click="progressValue = 50">50</button>
      <button @click="progressValue = 100">100</button>
    </div>
  </div>
</template>

<script>
  import ProgressIndicator from './progress-indicator.vue'

  export default {
    components: {
      ProgressIndicator
    },
    data () {
      return {
        progressValue: 0
      }
    }
  }
</script>

<style scoped>

</style>
