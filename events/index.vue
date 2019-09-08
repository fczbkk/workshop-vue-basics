<template>
  <div>
    <p>
      <button @click="clicksCounter += 1">
        Click this button
      </button>
    </p>
    <p>Button has been clicked {{ clicksCounter }} times.</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        clicksCounter: 0
      }
    }
  }
</script>

<style scoped>

</style>
