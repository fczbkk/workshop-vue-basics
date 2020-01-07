<template>
  <div>
    <p>{{ randomValue }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomValue: 0
    }
  },
  mounted () {
    // update to a random value from 0 to 100 every second
    setInterval(() => {this.randomValue = Math.round(Math.random() * 100)}, 1000)
  },
  watch: {
    randomValue (newValue, oldValue) {
      // eslint-disable-next-line
      console.log(`Random value changed from ${oldValue} to ${newValue}.`)
    }
  }
}
</script>

<style scoped>

</style>
