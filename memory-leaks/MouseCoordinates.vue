<template>
  <div>
    <h1>Mouse coordinates</h1>
    <p>Left: {{ left }}</p>
    <p>Top: {{ top }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        left: 0,
        top: 0
      }
    },
    methods: {
      handleMouseMove (event) {
        this.left = event.clientX
        this.top = event.clientY
      }
    },
    mounted () {
      document.body.addEventListener('mousemove', this.handleMouseMove)
    },
    destroyed () {
      document.body.removeEventListener('mousemove', this.handleMouseMove)
    }
  }
</script>

<style scoped>

</style>
